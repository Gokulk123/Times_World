import React, { useContext, useEffect } from "react";
import { Button, Card, Avatar, Row, Col } from "antd";

import UserContext from "../contexts/UserContext";

import { getCountry } from "../actions/getCountry";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard() {
  const { setIsAuthenticated } = useContext(UserContext);
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.countries.countries);
  const { Meta } = Card;
  console.log(list);

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
          {list.map((value) => {
            return (
              <Col
                xl={4}
                style={{
                  marginTop: "30px",
                  marginLeft: "160px",
                }}
              >
                <Card
                  style={{ width: 300 }}
                  cover={<img alt="example" src={value.flag} />}
                >
                  <Meta title={value.name} description={value.region} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </p>
    </div>
  );
}
