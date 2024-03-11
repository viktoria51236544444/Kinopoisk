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

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          marginTop: "-15%",
          color: "white",
          marginLeft: "-30%",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => setActiveForm("category")}
            style={{
              cursor: "pointer",
              backgroundColor: "#800000",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
            }}
          >
            Добавить категорию
          </button>
          {activeForm === "category" && (
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Категория"
                  onChange={(e) => setNAme(e.target.value)}
                  style={{
                    marginTop: "5px",
                    padding: "10px",
                    border: "1px solid #555",
                    borderRadius: "5px",
                    backgroundColor: "#333",
                    color: "white",
                  }}
                />
              </div>
              <button
                onClick={handleClickcategory}
                style={{
                  cursor: "pointer",
                  backgroundColor: "#800000",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  marginTop: "5px",
                }}
              >
                Добавить
              </button>
            </div>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => setActiveForm("actor")}
            style={{
              cursor: "pointer",
              backgroundColor: "#800000",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
            }}
          >
            Добавить актера
          </button>
          {activeForm === "actor" && (
            <div>
              <div style={{ display: "inline-block" }}>
                <div>
                  <input
                    type="text"
                    placeholder="Имя"
                    onChange={(e) => setActors2(e.target.value)}
                    style={{
                      marginTop: "5px",
                      padding: "10px",
                      border: "1px solid #555",
                      borderRadius: "5px",
                      backgroundColor: "#333",
                      color: "white",
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Возраст"
                    onChange={(e) => setAge(e.target.value)}
                    style={{
                      marginTop: "5px",
                      padding: "10px",
                      border: "1px solid #555",
                      borderRadius: "5px",
                      backgroundColor: "#333",
                      color: "white",
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Описание"
                    onChange={(e) => setDescription2(e.target.value)}
                    style={{
                      marginTop: "5px",
                      padding: "10px",
                      border: "1px solid #555",
                      borderRadius: "5px",
                      backgroundColor: "#333",
                      color: "white",
                    }}
                  />
                </div>
              </div>
              <button
                onClick={handleClickActors}
                style={{
                  cursor: "pointer",
                  backgroundColor: "#800000",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  marginTop: "5px",
                }}
              >
                Добавить
              </button>
            </div>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => setActiveForm("genre")}
            style={{
              cursor: "pointer",
              backgroundColor: "#800000",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
            }}
          >
            Добавить жанр
          </button>
          {activeForm === "genre" && (
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Жанр"
                  onChange={(e) => setNAme2(e.target.value)}
                  style={{
                    marginTop: "5px",
                    padding: "10px",
                    border: "1px solid #555",
                    borderRadius: "5px",
                    backgroundColor: "#333",
                    color: "white",
                  }}
                />
              </div>
              <button
                onClick={handleClickGenres}
                style={{
                  cursor: "pointer",
                  backgroundColor: "#800000",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  marginTop: "5px",
                }}
              >
                Добавить
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
          marginLeft: "-40%",
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
        }}
      >
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="tagline"
          onChange={(e) => setTagline(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          placeholder="url"
          onChange={(e) => setPoster(e.target.files[0])}
          accept="poster/"
        />
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <div style={{ display: "flex" }}>
            <button onClick={incrementYear}>+</button>
            <button onClick={decrementYear}>-</button>
          </div>
        </div>
        <input
          type="text"
          placeholder="country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <div style={{ marginBottom: "10px" }}></div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
          <div style={{ marginLeft: "10px", display: "flex" }}>
            <button onClick={incrementBudget}>+</button>
            <button onClick={decrementBudget}>-</button>
          </div>
        </div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Fees In USA"
            value={feesInUsa}
            onChange={(e) => setFeesInUsa(e.target.value)}
          />
          <div style={{ marginLeft: "10px", display: "flex" }}>
            <button onClick={incrementFeesInUSA}>+</button>
            <button onClick={decrementFeesInUSA}>-</button>
          </div>
        </div>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Fees In World"
            value={feesInWorld}
            onChange={(e) => setFeesInWorld(e.target.value)}
          />
          <div style={{ display: "flex" }}>
            <button onClick={incrementFeesInWorld}>+</button>
            <button onClick={decrementFeesInWorld}>-</button>
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            <input
              type="checkbox"
              checked={false}
              onChange={handleCheckboxChange}
            />
            Черновик
          </label>
        </div>
        <select onChange={(e) => setDirectors(e.target.value)}>
          <option>Режиссеры</option>
          {actor.map((elem) => (
            <option value={elem.slug} key={elem.slug}>
              {elem.name}
            </option>
          ))}
        </select>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option>Категория</option>
          {categories.map((elem) => (
            <option value={elem.slug} key={elem.slug}>
              {elem.name}
            </option>
          ))}
        </select>
        <select onChange={(e) => setActors(e.target.value)}>
          <option>Актеры</option>
          {actor.map((elem) => (
            <option value={elem.slug} key={elem.slug}>
              {elem.name}
            </option>
          ))}
        </select>
        <select onChange={(e) => setGenres(e.target.value)}>
          <option>Жанры</option>
          {genre.map((elem) => (
            <option value={elem.slug} key={elem.slug}>
              {elem.name}
            </option>
          ))}
        </select>
        <button className="button" onClick={handleClick}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
