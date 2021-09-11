import React, { useContext, useEffect } from "react";
import { Button, Comment, Tooltip, Avatar, Row, Col } from "antd";

import UserContext from "../contexts/UserContext";

import { getCountry } from "../actions/getCountry";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard() {
  const { setIsAuthenticated } = useContext(UserContext);
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.countries.countries);

  useEffect(() => {
    dispatch(getCountry());
  }, []);

  return (
    <div>
      <p>
        <Button
          onClick={() => {
            setIsAuthenticated(false);
          }}
        >
          Logout
        </Button>
        <Row>
          <Col
            xl={7}
            style={{
              borderStyle: "solid",
              marginLeft: "200px",
              marginTop: "30px",
            }}
          >
            {list.map((value) => {
              <Comment
                author={<a>{value.name}</a>}
                avatar={<Avatar src={value.flag} alt="Han Solo" />}
                content={value.region}
              />;
            })}
          </Col>
        </Row>
      </p>
    </div>
  );
}
