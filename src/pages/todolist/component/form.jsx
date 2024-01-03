import React, { useState } from "react";
import { produce } from "immer";

const initialValue = [
  {
    firstName: "john",
    lastName: "doe",
    extra: [{ age: "20", address: "america" }],
  },
  {
    firstName: "harry",
    lastName: "potter",
    extra: [{ age: "18", address: "america" }],
  },
];

function Form() {
  const [inputFields, setInputFields] = useState(initialValue);

  const handleFormChange = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;
    const data = [...inputFields];
    data[index][name] = value;
    setInputFields(data);
  };

  const handleInnerInputChange = (event, index, outerIndex) => {
    const name = event.target.name;
    const value = event.target.value;
    const data = produce(inputFields, (draftState) => {
      draftState[outerIndex].extra[index][name] = value;
    });
    setInputFields(data);
  };

  const handleAddNewField = () => {
    const newfield = {
      firstName: "",
      lastName: "",
      extra: [{ age: "", address: "" }],
    };
    setInputFields((prev) => [...prev, newfield]);
  };

  const handleAddNewInnerField = (index) => {
    const newField = { age: "", address: "" };
    const nextState = produce(inputFields, (draftState) => {
      draftState[index].extra.push(newField);
    });
    setInputFields(nextState);
  };

  // const handleRemoveField = (index) => {
  //   let data = [...inputFields];
  //   data.splice(index, 1);
  //   setInputFields(data);
  // };

  const handleRemoveOuterField = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  const handleRemoveInnerField = (index, outerIndex) => {
    console.log("remove inner filed is working well", index, outerIndex);
    const nextState = produce(inputFields, (draftState) => {
      draftState[outerIndex].extra.splice(index, 1);
    });
    setInputFields(nextState);
  };

  const handleUpdateField = (index) => {
    console.log("update button is working...", index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <button className="btn btn-primary mb-2" onClick={handleAddNewField}>
        Add more...
      </button>
      <form onSubmit={handleSubmit}>
        {inputFields.map((outerField, outerIndex) => (
          <div
            key={outerIndex + "outerField"}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
              width: "600px",
            }}
          >
            <div key={outerIndex} className="card-body d-flex mb-2">
              <input
                className="me-2"
                type="text"
                name="firstName"
                value={outerField.firstName}
                onChange={(event) => {
                  handleFormChange(event, outerIndex);
                }}
              />
              <input
                type="text"
                name="lastName"
                value={outerField.lastName}
                onChange={(event) => {
                  handleFormChange(event, outerIndex);
                }}
              />
            </div>
            <div className="d-flex mb-2 justify-content-between">
              <button
                className="btn btn-sm btn-info "
                onClick={(event) => {
                  handleAddNewInnerField(outerIndex);
                }}
              >
                add
              </button>
            </div>
            {outerField.extra.map((extraField, index) => {
              return (
                <div className="d-flex mb-2" key={index}>
                  <input
                    className="me-2"
                    type="text"
                    name="age"
                    value={extraField.age}
                    onChange={(event) => {
                      handleInnerInputChange(event, index, outerIndex);
                    }}
                  />
                  <input
                    type="text"
                    name="address"
                    value={extraField.address}
                    onChange={(event) => {
                      handleInnerInputChange(event, index, outerIndex);
                    }}
                  />
                  <button
                    className="btn btn-sm btn-warning ms-2"
                    onClick={() => {
                      handleRemoveInnerField(index, outerIndex);
                    }}
                  >
                    remove
                  </button>
                </div>
              );
            })}
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveOuterField(outerIndex)}
            >
              Delete
            </button>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Form;
