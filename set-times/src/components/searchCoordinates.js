import React from "react";
import SetTimes from "./setTimeResults"


const SearchCoordinates = (props) => {

return(
  <>
                {props.results.map((result, index) => ( //add search list to array
                    <SetTimes
                    set={result}
                    />
                ))}
  </>
  )
}
export default SearchCoordinates;
