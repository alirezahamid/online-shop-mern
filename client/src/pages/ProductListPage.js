import React, { useEffect } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Table, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { listProducts, deleteProduct } from "../store/actions/product.action"

const ProductListPage = ({ history, match }) => {
  const dispatch = useDispatch()

  const { loading, error, products } = useSelector((state) => state.productList)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = useSelector((state) => state.productDelete)
  const { userInfo } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts())
    } else {
      history.push("/login")
    }
  }, [dispatch, history, userInfo, successDelete])

  const createProductHandler = (id) => {
    // CREATE PRODUCTS
  }
  const deleteHandler = (id) => {
    if (window.confirm("Are you Sure?")) {
      dispatch(deleteProduct(id))
    }
  }
  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={() => createProductHandler}>
            Create Products <i className="fas fa-plus"></i>
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
            </tr>
          </thead>
          <tbody>
            {!products ? (
              <Message variant="danger">Error</Message>
            ) : (
              products.map((product, index) => (
                <tr key={index}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price} </td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => {
                        deleteHandler(product._id)
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}
    </>
  )
}

export default ProductListPage
