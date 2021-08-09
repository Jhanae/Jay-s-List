import React from 'react'
import { Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'
import { useState } from 'react'

function Filter({setType, setSearch, sortPrice, sortQuantity}){
    const [searchText, setSearchText] = useState("")
    return (
        <div>
            <div className="filter-btn">
                <InputGroup className="mb-3 ">
                    <Button className="filter-btns" onClick={(e) => setType(e.target.value)}value="All">All</Button>
                    <Button className="filter-btns" onClick={(e) => setType("IPhone")} value="Apple">Apple</Button>
                    <Button className="filter-btns" onClick={(e) => setType(e.target.value)} value="Samsung">Samsung</Button>
                    <DropdownButton id="dropdown-item-button"  title="Sort">
                    <Dropdown.Item href="#/action-1" onClick={sortPrice}>Price: Lowest to Highest</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onChange={sortQuantity}>Quantity: Highest to Lowest</Dropdown.Item>
                    </DropdownButton>                    
                    <FormControl
                    onChange={(e) => setSearchText(e.target.value)}
                    className="productInput"
                    placeholder="Search Inventory..."
                    aria-label="Search Inventory..."
                    aria-describedby="basic-addon2"
                    />
                    <Button onClick={() => setSearch(searchText)} variant="primary" id="button-addon2">
                    Search
                    </Button>
                </InputGroup>            
            </div>
        </div>
    )
}
export default Filter;