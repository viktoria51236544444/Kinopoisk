import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
const AddProduct = () => {
  const {
    addProducts,
    getCategories,
    categories,
    getActors,
    actor,
    genre,
    getGenres,
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

    // Resetting form fields after adding product
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

  return (
    <div style={{ minHeight: "100vh" }}>
      <h2 className="h2">Add Product</h2>
      <div className="input">
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          />
          <div style={{ marginLeft: "-10%" }}>
            <button
              style={{
                backgroundColor: "black",
                color: "#f50",
                border: "none",
                borderRadius: "10px",
              }}
              onClick={incrementYear}
            >
              +
            </button>
            <button className="button__increment" onClick={decrementYear}>
              -
            </button>
          </div>
        </div>
        <input
          type="text"
          placeholder="country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <div
          style={{
            background: "black",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        ></div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          />
          <div style={{ marginLeft: "10px" }}>
            <button onClick={incrementBudget}>+</button>
            <button onClick={decrementBudget}>-</button>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Fees In USA"
            value={feesInUsa}
            onChange={(e) => setFeesInUsa(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          />
          <div style={{ marginLeft: "10px" }}>
            <button onClick={incrementFeesInUSA}>+</button>
            <button onClick={decrementFeesInUSA}>-</button>
          </div>
        </div>
        {/* <div style={{ background: "black", padding: "20px", width: "300px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={openDatePicker}
              style={{ padding: "10px", cursor: "pointer" }}
            >
              Показать календарь
            </button>
            <input
              type="text"
              placeholder="год.месяц.день"
              value={format(worldPremiere, "yyyy-MM-dd")}
              style={{
                marginLeft: "10px",
                width: "100%",
                padding: "10px",
                color: "white",
              }}
              readOnly
            />
          </div>
          {showDatePicker && (
            <DatePicker
              selected={worldPremiere}
              onChange={handleDateChange}
              popperPlacement="bottom-end"
              showYearDropdown
              dateFormat="yyyy-MM-dd"
              inline
            />
          )}
        </div> */}

        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Fees In World"
            value={feesInWorld}
            onChange={(e) => setFeesInWorld(e.target.value)}
            style={{ width: "100%", padding: "10px" }}
          />
          <div style={{ marginLeft: "10px" }}>
            <button onClick={incrementFeesInWorld}>+</button>
            <button onClick={decrementFeesInWorld}>-</button>
          </div>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={draft}
              onChange={handleCheckboxChange}
            />
            Draft
          </label>
        </div>

        <select
          onChange={(e) => {
            setDirectors(e.target.value);
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
        >
          <option>Жанры</option>
          {genre.map((elem) => (
            <option value={elem.slug} key={elem.slug}>
              {elem.name}
            </option>
          ))}
        </select>

        <button className="button" onClick={handleClick}>
          add
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
