import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import search from "../../../assets/icons/search.png";

const SearchModal = () => {
    const [show, setShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    console.log("Search Term:", searchTerm);

    return (
        <>
            <button
                type="button"
                className="btn navbar-brand"
                onClick={() => setShow(true)}
                style={{ borderRadius: "5px", border: "1px solid black" }}
            >
                <img src={search} width="20" height="20" alt="Search" />
            </button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Search Your New Collection
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        aria-label="Search"
                        aria-describedby="search-input"
                        style={{ borderRadius: "20px", border: "1px solid black" }}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        type="button"
                        className="btn mt-2"
                        style={{ borderRadius: "20px", border: "1px solid black" }}
                    >
                        Search
                    </button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default SearchModal;
