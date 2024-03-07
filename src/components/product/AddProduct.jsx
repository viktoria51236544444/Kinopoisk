import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";

const AddProduct = () => {
  const { addProducts, products, getProducts, getCategories, categories } =
    useProduct();
  console.log(categories);
  useEffect(() => {
    getCategories();
  }, []);
  console.log(products);
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState(0);
  const [country, setCountry] = useState("");
  const [worldPremiere, setWorldPremiere] = useState("");
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
    newProduct.append("year", parseInt(year));
    newProduct.append("country", country);
    newProduct.append("world_premiere", worldPremiere);
    newProduct.append("budget", budget);
    newProduct.append("fees_in_usa", feesInUsa);
    newProduct.append("fees_in_world", feesInWorld);
    newProduct.append("draft", draft);
    newProduct.append("category", category);
    newProduct.append("directors", directors);
    newProduct.append("actors", actors);
    newProduct.append("genres", genres);
    addProducts(newProduct);
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
          type="text"
          placeholder="year"
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder="worldPremiere"
          onChange={(e) => setWorldPremiere(e.target.value)}
        />
        <input
          type="text"
          placeholder="budget"
          onChange={(e) => setBudget(e.target.value)}
        />
        <input
          type="text"
          placeholder="feesInUsa"
          onChange={(e) => setFeesInUsa(e.target.value)}
        />
        <input
          type="text"
          placeholder="feesInWorld"
          onChange={(e) => setFeesInWorld(e.target.value)}
        />
        <input
          type="text"
          placeholder="draft"
          onChange={(e) => setDraft(e.target.value)}
        />

        <input
          type="text"
          placeholder="directors"
          onChange={(e) => setDirectors(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option>Выбор</option>
          {categories.map((elem) => (
            <option value={elem.slug} key={elem.slug}>
              {elem.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="actors"
          onChange={(e) => setActors(e.target.value)}
        />
        <input
          type="text"
          placeholder="genders"
          onChange={(e) => setGenres(e.target.value)}
        />
        <button className="button" onClick={handleClick}>
          add
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
