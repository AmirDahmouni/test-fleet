import {Input} from "reactstrap"

export default function SearchBar()
{


    return (
        <div className="search-box chat-search-box py-4">
        <div className="position-relative">
          <Input
            type="text"
            className="form-control"
            placeholder="Search..."
          />
          <i class="bx bx-search-alt"></i>
        </div>
      </div>
    )
}