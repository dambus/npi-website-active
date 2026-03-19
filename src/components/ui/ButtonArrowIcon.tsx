import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'

export function ButtonArrowIcon() {
  return (
    <span aria-hidden="true" className="npi-button__icon">
      <span className="npi-button__icon-glyph npi-button__icon-glyph--up">
        <ArrowUpRightIcon className="h-4 w-4 stroke-[2.4]" />
      </span>
      <span className="npi-button__icon-glyph npi-button__icon-glyph--right">
        <ArrowRightIcon className="h-4 w-4 stroke-[2.4]" />
      </span>
    </span>
  )
}

export default ButtonArrowIcon
