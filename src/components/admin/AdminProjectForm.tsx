import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { supabase } from '@/lib/supabase'
import { createProject } from '@/services/admin/projects/createProject'
import type { AdminProjectCategory, } from '@/services/admin/projects/fetchProjectCategories'
import { updateProject } from '@/services/admin/projects/updateProject'
import { uploadProjectImage } from '@/services/admin/projects/uploadProjectImage'
import type { AdminProjectRecord, ProjectFormValues } from '@/services/admin/projects/types'

type AdminProjectFormProps = {
  categories: AdminProjectCategory[]
  initialValues?: AdminProjectRecord | null
  mode: 'create' | 'edit'
  projectId?: string
}

const emptyValues: ProjectFormValues = {
  title: '',
  slug: '',
  shortDescription: '',
  fullDescription: '',
  investor: '',
  location: '',
  country: 'Serbia',
  year: '',
  industry: '',
  projectPhase: '',
  featuredImagePath: '',
  isFeatured: false,
  isPublished: false,
  sortOrder: '0',
  categoryIds: [],
}

export function AdminProjectForm({ categories, initialValues, mode, projectId }: AdminProjectFormProps) {
  const navigate = useNavigate()
  const [values, setValues] = useState<ProjectFormValues>(() =>
    initialValues
      ? {
          title: initialValues.title,
          slug: initialValues.slug,
          shortDescription: initialValues.shortDescription,
          fullDescription: initialValues.fullDescription,
          investor: initialValues.investor,
          location: initialValues.location,
          country: initialValues.country,
          year: initialValues.year,
          industry: initialValues.industry,
          projectPhase: initialValues.projectPhase,
          featuredImagePath: initialValues.featuredImagePath,
          isFeatured: initialValues.isFeatured,
          isPublished: initialValues.isPublished,
          sortOrder: initialValues.sortOrder,
          categoryIds: initialValues.categoryIds,
        }
      : emptyValues,
  )
  const [coverFile, setCoverFile] = useState<File | null>(null)
  const [galleryFiles, setGalleryFiles] = useState<File[]>([])
  const [isSaving, setIsSaving] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const validationMessage = useMemo(() => {
    if (!values.title.trim()) return 'Title is required.'
    if (!values.slug.trim()) return 'Slug is required.'
    if (!values.shortDescription.trim()) return 'Short description is required.'
    return null
  }, [values])

  function updateValue<Key extends keyof ProjectFormValues>(key: Key, nextValue: ProjectFormValues[Key]) {
    setValues((current) => ({ ...current, [key]: nextValue }))
  }

  function toggleCategory(categoryId: string) {
    setValues((current) => ({
      ...current,
      categoryIds: current.categoryIds.includes(categoryId)
        ? current.categoryIds.filter((id) => id !== categoryId)
        : [...current.categoryIds, categoryId],
    }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (validationMessage) {
      setErrorMessage(validationMessage)
      return
    }

    try {
      setIsSaving(true)
      setErrorMessage(null)
      setSuccessMessage(null)

      let nextValues = { ...values }

      if (coverFile) {
        nextValues.featuredImagePath = await uploadProjectImage({
          file: coverFile,
          projectSlug: nextValues.slug,
          kind: 'cover',
        })
      }

      const savedProjectId =
        mode === 'create'
          ? await createProject(nextValues)
          : await (async () => {
              if (!projectId) {
                throw new Error('Missing project id for edit mode.')
              }

              await updateProject(projectId, nextValues)
              return projectId
            })()

      if (galleryFiles.length > 0) {
        const uploadedGallery = await Promise.all(
          galleryFiles.map((file) =>
            uploadProjectImage({
              file,
              projectSlug: nextValues.slug,
              kind: 'gallery',
            }),
          ),
        )

        const { error } = await supabase.from('project_images').insert(
          uploadedGallery.map((path, index) => ({
            project_id: savedProjectId,
            image_path: path,
            alt_text: nextValues.title,
            sort_order: (index + 1) * 10,
          })),
        )

        if (error) {
          throw new Error(error.message)
        }
      }

      setSuccessMessage(mode === 'create' ? 'Project created successfully.' : 'Project updated successfully.')

      if (mode === 'create') {
        navigate(`/admin/projects/${savedProjectId}/edit`, { replace: true })
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to save project.')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <Card className="space-y-6 rounded-lg border-stone-700 bg-white p-6 sm:p-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Core content</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <Field label="Title" required>
            <Input className={adminFieldClassName} value={values.title} onChange={(event) => updateValue('title', event.target.value)} />
          </Field>
          <Field label="Slug" required>
            <Input className={adminFieldClassName} value={values.slug} onChange={(event) => updateValue('slug', event.target.value)} />
          </Field>
        </div>
        <Field label="Short description" required>
          <textarea
            className={textareaClassName}
            placeholder="Short public-facing summary for listings and homepage snippets."
            rows={4}
            value={values.shortDescription}
            onChange={(event) => updateValue('shortDescription', event.target.value)}
          />
        </Field>
        <Field label="Full description">
          <textarea
            className={textareaClassName}
            placeholder="Longer project description for the reference detail page."
            rows={6}
            value={values.fullDescription}
            onChange={(event) => updateValue('fullDescription', event.target.value)}
          />
        </Field>
      </Card>

      <Card className="space-y-6 rounded-lg border-stone-700 bg-white p-6 sm:p-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Project details</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          <Field label="Investor">
            <Input className={adminFieldClassName} value={values.investor} onChange={(event) => updateValue('investor', event.target.value)} />
          </Field>
          <Field label="Location">
            <Input className={adminFieldClassName} value={values.location} onChange={(event) => updateValue('location', event.target.value)} />
          </Field>
          <Field label="Country">
            <Input className={adminFieldClassName} value={values.country} onChange={(event) => updateValue('country', event.target.value)} />
          </Field>
          <Field label="Year">
            <Input className={adminFieldClassName} value={values.year} onChange={(event) => updateValue('year', event.target.value)} />
          </Field>
          <Field label="Industry">
            <Input className={adminFieldClassName} value={values.industry} onChange={(event) => updateValue('industry', event.target.value)} />
          </Field>
          <Field label="Project phase">
            <Input className={adminFieldClassName} value={values.projectPhase} onChange={(event) => updateValue('projectPhase', event.target.value)} />
          </Field>
        </div>
      </Card>

      <Card className="space-y-6 rounded-lg border-stone-700 bg-white p-6 sm:p-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Publishing</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          <Field label="Sort order">
            <Input className={adminFieldClassName} value={values.sortOrder} onChange={(event) => updateValue('sortOrder', event.target.value)} />
          </Field>
          <label className={toggleCardClassName}>
            <input
              checked={values.isPublished}
              className="h-4 w-4 rounded border-stone-400 text-amber-600 focus:ring-amber-500"
              onChange={(event) => updateValue('isPublished', event.target.checked)}
              type="checkbox"
            />
            <span>
              <span className="block text-sm font-semibold text-stone-800">Published</span>
              <span className="block text-xs leading-5 text-stone-500">Visible on the public website.</span>
            </span>
          </label>
          <label className={toggleCardClassName}>
            <input
              checked={values.isFeatured}
              className="h-4 w-4 rounded border-stone-400 text-amber-600 focus:ring-amber-500"
              onChange={(event) => updateValue('isFeatured', event.target.checked)}
              type="checkbox"
            />
            <span>
              <span className="block text-sm font-semibold text-stone-800">Featured on homepage</span>
              <span className="block text-xs leading-5 text-stone-500">Eligible for the homepage featured strip.</span>
            </span>
          </label>
        </div>
        <Field label="Categories">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <label
                key={category.id}
                className="flex items-center gap-2 rounded-lg border border-stone-300 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-800"
              >
                <input
                  checked={values.categoryIds.includes(category.id)}
                  className="h-4 w-4 rounded border-stone-400 text-amber-600 focus:ring-amber-500"
                  onChange={() => toggleCategory(category.id)}
                  type="checkbox"
                />
                {category.name}
              </label>
            ))}
          </div>
        </Field>
      </Card>

      <Card className="space-y-6">
        <div className="grid gap-5 lg:grid-cols-2">
          <Field label="Current cover path">
            <Input
              className={adminFieldClassName}
              value={values.featuredImagePath}
              onChange={(event) => updateValue('featuredImagePath', event.target.value)}
            />
          </Field>
          <Field label="Upload new cover image">
            <input
              className={fileInputClassName}
              onChange={(event) => setCoverFile(event.target.files?.[0] ?? null)}
              type="file"
              accept="image/*"
            />
          </Field>
        </div>
        <Field label="Upload gallery images">
          <input
            className={fileInputClassName}
            multiple
            onChange={(event) => setGalleryFiles(Array.from(event.target.files ?? []))}
            type="file"
            accept="image/*"
          />
        </Field>
        {initialValues?.gallery.length ? (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-stone-800">Existing gallery</p>
            <ul className="space-y-2 text-sm text-stone-600">
              {initialValues.gallery.map((image) => (
                <li key={image.id}>{image.path}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </Card>

      {validationMessage && !errorMessage ? (
        <p className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {validationMessage}
        </p>
      ) : null}
      {errorMessage ? (
        <p className="rounded-lg border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {errorMessage}
        </p>
      ) : null}
      {successMessage ? (
        <p className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {successMessage}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <Button
          className="rounded-lg bg-stone-950 px-6 hover:bg-stone-800 disabled:bg-stone-300 disabled:text-stone-500"
          disabled={isSaving || Boolean(validationMessage)}
          type="submit"
        >
          {isSaving ? 'Saving...' : mode === 'create' ? 'Create project' : 'Save changes'}
        </Button>
        <Link
          className="inline-flex min-h-12 items-center rounded-lg border border-stone-300 px-5 text-sm font-semibold text-stone-700 transition hover:bg-stone-100"
          to="/admin/projects"
        >
          Back to projects
        </Link>
      </div>
    </form>
  )
}

function Field({
  children,
  label,
  required = false,
}: {
  children: React.ReactNode
  label: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-stone-800">
        {label}
        {required ? ' *' : ''}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  )
}

const textareaClassName =
  'min-h-32 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm leading-7 text-stone-950 outline-none transition placeholder:text-stone-500 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 disabled:border-stone-200 disabled:bg-stone-100 disabled:text-stone-500'

const adminFieldClassName =
  'rounded-lg border-stone-300 bg-white text-stone-950 placeholder:text-stone-500 focus:border-amber-500 focus:ring-amber-100 disabled:border-stone-200 disabled:bg-stone-100 disabled:text-stone-500'

const fileInputClassName =
  'block w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-700 file:mr-4 file:rounded-md file:border-0 file:bg-stone-900 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-stone-800'

const toggleCardClassName =
  'flex rounded-lg border border-stone-300 bg-stone-50 px-4 py-3'

export default AdminProjectForm
