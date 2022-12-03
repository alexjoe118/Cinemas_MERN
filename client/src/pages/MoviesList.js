import React, { useState, useEffect } from "react";

import Table from "../components/Table";
import api from "../api";

import styled from "styled-components";

// import "react-table/react-table.css";
const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;
const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;
const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;
function DeleteMovie({ id }) {
  const deleteUser = (event) => {
    event.preventDefault();
    if (
      window.confirm(`Do you want to delete the movie ${id} permanently?`)
    ) {
      api.deleteMovieById(id);
      window.location.reload();
    }
  };
  return (
    <Delete
      onClick={(e) => {
        deleteUser(e);
      }}
    >
      Delete
    </Delete>
  );
}
function UpdateMovie({ id }) {
  const updateUser = (event) => {
    event.preventDefault();
    window.location.href = `/movies/update/${id}`;
  };
  return (
    <Update
      onClick={(e) => {
        updateUser(e);
      }}
    >
      Update
    </Update>
  );
}
const temp_columns = [
  {
    Header: "ID",
    accessor: "_id",
    filterable: true,
  },
  {
    Header: "Name",
    accessor: "name",
    filterable: true,
  },
  {
    Header: "Rating",
    accessor: "rating",
    filterable: true,
  },
  {
    Header: "Time",
    accessor: "time",
    filterable: false,
    Cell: (props) => <span>{props.value.join(" / ")}</span>,
  },
  {
    Header: "DEL",
    accessor: "",
    filterable: false,
    Cell: function (props) {
        console.log("delteprops", props)
      return (
        <span>
          <DeleteMovie id={props.row.original._id} />
        </span>
      );
    },
  },
  {
    Header: "UPDATE",
    accessor: "",
    filterable: false,
    Cell: function (props) {
      return (
        <span>
          <UpdateMovie id={props.row.original._id} />
        </span>
      );
    },
  },
];

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [columns, setColumns] = useState(temp_columns);
  const [isLoading, setIsLoading] = useState([]);
  const [showTable, setShowTable] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    api.getAllMovie().then((movies) => {
      setMovies(movies.data.data);
      setIsLoading(false);
      if (!movies.data.data.lengt) {
        setShowTable(true);
      }
    });
  }, []);

  return (
    <Wrapper>
      {showTable && (
        <Table
          data={movies}
          columns={columns}
          loading={isLoading}
          defaultPageSize={10}
          showPageSizeOption={true}
          minRows={0}
        ></Table>
      )}
    </Wrapper>
  );
}
