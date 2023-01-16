import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { changeSort } from "../../store/slices/filters.slice"
import { BaseState } from "../../types/state.types"


function SortProductsSelect () {
  const dispatch = useDispatch()
  const filters = useSelector((state: BaseState) => state.filters)
  const options = [
    { value: 'newest', label: 'Sort by our newly added books' },
    { value: "newPublished", label: "Sort by newest published" },
    { value: "rating", label: "Sort by rating" },
    { value: "title", label: "Sort by title" },
    { value: "pricehigh", label: "Sort by price: high to low" },
    { value: "pricelow", label: "Sort by price: low to high" },
    { value: 'discount', label: 'Sort by product discount'}
  ]
  return (
    <select
      value={filters.sort}
      onChange={(event) => dispatch(changeSort(event.target.value))}
      className="form-select appearance-none bg-no-repeat px-8 md:pr-11 m-2.5 h-14 font-medium border-2 border-[#CBD3D9] rounded-md outline-none w-full md:w-auto text-[#27272E] appearence-none"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default SortProductsSelect