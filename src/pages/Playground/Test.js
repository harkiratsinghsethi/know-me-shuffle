import { useEffect, useState } from "react";

const SelectButton = ({ selectedList, setSelectedList, data, setData, name }) => {
  const clickHandler = (e) => {
    setData(data.filter(emp => emp.first_name !== name))
    setSelectedList([...selectedList, name])
  }
  return (<button type='input' onClick={(e) => clickHandler(e)}>Select</button>)
}
const RefreshButton = ({ isRefreshed,setIsRefreshed,setSelectedList }) => {
  const clickHandler = (e) => {
    setIsRefreshed(!isRefreshed)
    setSelectedList([])
  }
  return (<button type='input' onClick={(e) => clickHandler(e)}>Refresh</button>)
}

const FindEmployee = () => {
  const [searchVal,setSearchVal] =useState(null)
  const [data, setData] = useState([]);
  let [searchedData, setSearchData] = useState([]);
  let [selectedList, setSelectedList] = useState([]);
  const [isRefreshed,setIsRefreshed]=useState(false)
  const [error, setError] = useState("");
  console.log(selectedList)
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((resp) => resp.json())
      .then((respJson) => setData(respJson.data))
      .catch((error) => setError(error.message));
  }, [isRefreshed]);

  const renderTable = (empData, setDataCB) =>
    empData.map((emp, i) => {
      return (
        <div style={{
          display: "flex",
          border: "1px solid",
          padding: "5px",
          flexDirection: 'row'
        }}>
          <div
            style={{
              textAlign: "left",
            }}
            key={i}
          >
            {emp.first_name}
          </div>
          <div style={{
            marginLeft: 'auto',
            marginRight: '0'
          }}>
            {<SelectButton selectedList={selectedList} setSelectedList={setSelectedList} data={empData} setData={setDataCB} name={emp.first_name} />}
          </div>

        </div>
      );
    });

  const searchEmp = (e) => {
    setSearchVal(e.target.value.toUpperCase())
    setSearchData(
      data.filter((emp) =>
        emp.first_name.toUpperCase().includes(e.target.value.toUpperCase())
      )
    );
  };

  return !error.length ? (
    <div>
    <div>
      <div>
        <input
          type="text"
          placeholder="Search Employee"
          onChange={(e) => searchEmp(e)}
        ></input>
      </div>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {searchedData.length
            ? renderTable(searchedData, setSearchData)
            : data.length && renderTable(data, setData)}

        </div>

      </div>
    </div>
    <div>{selectedList.length > 0 && <div>{selectedList.join(',')} selected <RefreshButton isRefreshed= {isRefreshed} setIsRefreshed={setIsRefreshed} setSelectedList={setSelectedList}/></div>}  </div>
    </div>
  ) : (
    <div> {error}</div>
  );
};
export default FindEmployee;



