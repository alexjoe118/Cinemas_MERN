import React, { useState } from "react";
import api from "../api";

import styled from "styled-components";
import { useParams } from "react-router-dom";

const Title = styled.h1.attrs({
  className: `h1`,
})``

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`

const Label = styled.label`
  margin: 5px;
`

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`
const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`

export default function MovieUpdate() {
  console.log("l_time", useParams().id)
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [time, setTime] = useState("");
  const [sid, setId] = useState(useParams().id);
  const handleChangeInputName = (event) => {
    const name = event.target.value;
    setName(name);
  };
  const handleChangeInputRating = (event) => {
    const l_rating = event.target.validity.valid ? event.target.value : rating;
    setRating(l_rating);
  };

  const handleChangeInputTime = (event) => {
    const time = event.target.value;
    setTime(time);
  };

  const handleIncludeMoive = async () => {
    const l_name = name;
    const l_rating = rating;
    const l_time = time;
    
    const arrayTime = l_time.split("/");
    const payload = { name: l_name, rating: l_rating, time: arrayTime };
    console.log("_id", sid)
    await api.updateMovieById(sid, payload).then((res) => {
      window.alert(`Movie updated successfully`);
      setName(l_name);
      setRating(l_rating);
      setTime(l_time);
    });
  };
  return (
    <Wrapper>
      <Title>Create Movie</Title>
      <Label>Name:</Label>
      <InputText type="text" value={name} 
      onChange={handleChangeInputName} 
      />
      <Label>Rating: </Label>
      <InputText
        type="number"
        step="0.1"
        lang="en-US"
        min="0"
        max="10"
        pattern="[0-9]+([,\.][0-9]+)?"
        value={rating}
        onChange={handleChangeInputRating}
      />
      <Label>Time:</Label>
      <InputText
        type="text"
        value={time}
        onChange={handleChangeInputTime}
      />
      <Button
       onClick={handleIncludeMoive}
      >Add Moive</Button>
      <CancelButton href={"/movies/list"}>Cancel</CancelButton>
    </Wrapper>
  );
}
