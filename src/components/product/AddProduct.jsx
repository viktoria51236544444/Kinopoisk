import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";
const AddProduct = () => {
  const {
    addProducts,
    getCategories,
    categories,
    getActors,
    actor,
    genre,
    getGenres,
    addCategories,
    addActors,
    addGenres,
  } = useProduct();

  console.log(categories);
  useEffect(() => {
    getCategories();
    getActors();
    getGenres();
  }, []);

  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState("");
  const [year, setYear] = useState(2024);
  const [country, setCountry] = useState("");
  const [worldPremiere, setWorldPremiere] = useState(new Date());
  const [budget, setBudget] = useState(0);
  const [feesInUsa, setFeesInUsa] = useState(0);
  const [feesInWorld, setFeesInWorld] = useState(0);
  const [draft, setDraft] = useState(false);
  const [category, setCategory] = useState("");
  const [directors, setDirectors] = useState("");
  const [actors, setActors] = useState("");
  const [genres, setGenres] = useState("");

  const handleClick = () => {
    const newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("tagline", tagline);
    newProduct.append("description", description);
    newProduct.append("poster", poster);
    newProduct.append("year", year);
    newProduct.append("country", country);
    // newProduct.append("world_premiere", worldPremiere);
    newProduct.append("budget", budget);
    newProduct.append("fees_in_usa", feesInUsa);
    newProduct.append("fees_in_world", feesInWorld);
    newProduct.append("draft", draft.toString());
    newProduct.append("category", category);
    newProduct.append("directors", directors);
    newProduct.append("actors", actors);
    newProduct.append("genres", genres);

    addProducts(newProduct);
    setTitle("");
    setTagline("");
    setDescription("");
    setPoster("");
    setYear("");
    setCountry("");
    setWorldPremiere("");
    setBudget(0);
    setFeesInUsa(0);
    setFeesInWorld(0);
    setDraft(false);
    setCategory("");
    setDirectors("");
    setActors("");
    setGenres("");
  };
  // ! caregories add
  const [name, setNAme] = useState("");
  const handleClickcategory = () => {
    const newCategory = new FormData();
    newCategory.append("name", name);
    addCategories(newCategory);
  };
  // ! caregories actors
  const [actor2, setActors2] = useState("");
  const [description2, setDescription2] = useState("");
  const [age, setAge] = useState(0);
  const handleClickActors = () => {
    const newActor = new FormData();
    newActor.append("name", actor2);
    newActor.append("age", age);
    newActor.append("description", description2);
    addActors(newActor);
  };
  // ! genres add
  const [name2, setNAme2] = useState("");
  const handleClickGenres = () => {
    const newGenre = new FormData();
    newGenre.append("name", name2);
    addGenres(newGenre);
  };
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setWorldPremiere(date);
    setShowDatePicker(false);
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };
  //? Counter for year
  const incrementYear = () => {
    setYear((prevYear) => prevYear + 1);
  };

  const decrementYear = () => {
    setYear((prevYear) => prevYear - 1);
  };

  //? Counter for budget
  const incrementBudget = () => {
    setBudget((prevBudget) => prevBudget + 1);
  };

  const decrementBudget = () => {
    setBudget((prevBudget) => prevBudget - 1);
  };
  //? Counter for FeesInUsa
  const incrementFeesInUSA = () => {
    setFeesInUsa((prevFeesInUSA) => prevFeesInUSA + 1);
  };

  const decrementFeesInUSA = () => {
    setFeesInUsa((prevFeesInUSA) => prevFeesInUSA - 1);
  };
  //? Counter for FeesInWorld
  const incrementFeesInWorld = () => {
    setFeesInWorld((prevFeesInWorld) => prevFeesInWorld + 1);
  };

  const decrementFeesInWorld = () => {
    setFeesInWorld((prevFeesInWorld) => prevFeesInWorld - 1);
  };
  // ? checkbox draft
  const handleCheckboxChange = () => {
    setDraft((prevDraft) => !prevDraft);
  };
  const [activeForm, setActiveForm] = useState(null);
  const buttonStyle = {
    padding: "10px",
    background: "#000",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  };

  const formStyle = {
    marginRight: "20px",
    padding: "20px",
    background: "#333",
    borderRadius: "5px",
  };

  const addButtonStyle = {
    padding: "10px",
    background: "#000",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          marginTop: "-15%",
          color: "white",
          marginLeft: "-20%",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setActiveForm("category")} style={buttonStyle}>
            Добавить категорию
          </button>
          {activeForm === "category" && (
            <div style={formStyle}>
              <h2>Добавление категории</h2>
              <input type="text" onChange={(e) => setNAme(e.target.value)} />
              <button onClick={handleClickcategory} style={addButtonStyle}>
                Add
              </button>
            </div>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setActiveForm("actor")} style={buttonStyle}>
            Добавить актера
          </button>
          {activeForm === "actor" && (
            <div style={formStyle}>
              <h2>Добавление актера</h2>
              <input type="text" onChange={(e) => setActors2(e.target.value)} />
              <input type="text" onChange={(e) => setAge(e.target.value)} />
              <input
                type="text"
                onChange={(e) => setDescription2(e.target.value)}
              />
              <button onClick={handleClickActors} style={addButtonStyle}>
                Add
              </button>
            </div>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setActiveForm("genre")} style={buttonStyle}>
            Добавить жанр
          </button>
          {activeForm === "genre" && (
            <div style={formStyle}>
              <h2>Добавление жанра</h2>
              <input type="text" onChange={(e) => setNAme2(e.target.value)} />
              <button onClick={handleClickGenres} style={addButtonStyle}>
                Add
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className="input"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          background: "linear-gradient(45deg, #000000 60%, #ff8c00)",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input
          type="text"
          placeholder="title"
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #444", // border styling
            borderRadius: "5px",
          }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="tagline"
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #444",
            borderRadius: "5px",
          }}
          onChange={(e) => setTagline(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #444",
            borderRadius: "5px",
          }}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          placeholder="url"
          onChange={(e) => setPoster(e.target.files[0])}
          accept="poster/"
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #444",
            borderRadius: "5px",
          }}
        />
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            value={year}
            style={{
              marginRight: "5px",
              padding: "8px",
              border: "1px solid #444",
              borderRadius: "5px",
            }}
            onChange={(e) => setYear(e.target.value)}
          />
          <div style={{ display: "flex" }}>
            <button
              onClick={incrementYear}
              style={{
                marginRight: "5px",
                padding: "8px",
                background: "#5cb85c", // green button
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              +
            </button>
            <button
              className="button__increment"
              onClick={decrementYear}
              style={{
                padding: "8px",
                background: "#d9534f", // red button
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              -
            </button>
          </div>
        </div>
        <input
          type="text"
          placeholder="country"
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #444",
            borderRadius: "5px",
          }}
          onChange={(e) => setCountry(e.target.value)}
        />
        <div style={{ marginBottom: "10px" }}></div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Budget"
            value={budget}
            style={{
              marginRight: "5px",
              padding: "8px",
              border: "1px solid #444",
              borderRadius: "5px",
            }}
            onChange={(e) => setBudget(e.target.value)}
          />
          <div style={{ marginLeft: "10px", display: "flex" }}>
            <button
              onClick={incrementBudget}
              style={{
                marginRight: "5px",
                padding: "8px",
                background: "#5cb85c", // green button
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              +
            </button>
            <button
              onClick={decrementBudget}
              style={{
                padding: "8px",
                background: "#d9534f", // red button
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              -
            </button>
          </div>
        </div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Fees In USA"
            value={feesInUsa}
            style={{
              marginRight: "5px",
              padding: "8px",
              border: "1px solid #444",
              borderRadius: "5px",
            }}
            onChange={(e) => setFeesInUsa(e.target.value)}
          />
          <div style={{ marginLeft: "10px", display: "flex" }}>
            <button
              onClick={incrementFeesInUSA}
              style={{
                marginRight: "5px",
                padding: "8px",
                background: "#5cb85c", // green button
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              +
            </button>
            <button
              onClick={decrementFeesInUSA}
              style={{
                padding: "8px",
                background: "#d9534f", // red button
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              -
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Fees In World"
            value={feesInWorld}
            style={{
              marginRight: "5px",
              padding: "8px",
              border: "1px solid #444",
              borderRadius: "5px",
            }}
            onChange={(e) => setFeesInWorld(e.target.value)}
          />
          <div style={{ display: "flex" }}>
            <button
              onClick={incrementFeesInWorld}
              style={{
                marginRight: "5px",
                padding: "8px",
                background: "#5cb85c", // green button
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              +
            </button>
            <button
              onClick={decrementFeesInWorld}
              style={{
                padding: "8px",
                background: "#d9534f", // red button
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              -
            </button>
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            <input
              type="checkbox"
              checked={false}
              onChange={handleCheckboxChange}
            />
            Draft
          </label>
        </div>
        <select
          onChange={(e) => {
            setDirectors(e.target.value);
          }}
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #444",
            borderRadius: "5px",
          }}
        >
          <option>Режиссеры</option>
          {actor.map((elem) => (
            <option value={elem.slug} key={elem.slug}>
              {elem.name}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #444",
            borderRadius: "5px",
          }}
        >
          <option>Категория</option>
          {categories.map((elem) => (
            <option value={elem.slug} key={elem.slug}>
              {elem.name}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => {
            setActors(e.target.value);
          }}
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #444",
            borderRadius: "5px",
          }}
        >
          <option>Актеры</option>
          {actor.map((elem) => (
            <option value={elem.slug} key={elem.slug}>
              {elem.name}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => {
            setGenres(e.target.value);
          }}
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #444",
            borderRadius: "5px",
          }}
        >
          <option>Жанры</option>
          {genre.map((elem) => (
            <option value={elem.slug} key={elem.slug}>
              {elem.name}
            </option>
          ))}
        </select>
        <button
          className="button"
          onClick={handleClick}
          style={{
            padding: "10px",
            background: "#337ab7", // blue button
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
