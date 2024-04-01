import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Codbox from "../Codebox";
import CodeboxPost from "../Codeboxpost";
import Output from "../Output";
import OutputMulti from "../OutputMulti";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
}));

const Docspages = (props) => {
  console.log(props);
  const Data = props.Data;
  return (
    <>
      <Container fixed>
        <Grid spacing={2}>
          <Stack
            direction="column"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Grid item xs={12}>
              <Item sx={{ color: "#0F3156" }}>
                <h2 color="#0F3156">{Data.name}</h2>
              </Item>
              <Item sx={{ maxWidth: "700px", wordWrap: "break-word" }}>
                {Data.describe}
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <hr className="hr" color="#8ec0f5" />
                <Item
                  sx={{
                    color: "#0F3156",
                    display: "flex",
                    margin: "25px 0px",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  <span color="#0F3156">Get All Data</span>
                  <button className="method b-lightBlue">GET</button>
                </Item>
              </Item>
              <Codbox api_c={Data.link1} />
              <OutputMulti field={Data.field} />
            </Grid>
            <Grid item xs={12}>
              <Item>
                <hr className="hr" color="#8ec0f5" />
                <Item
                  sx={{
                    color: "#0F3156",
                    display: "flex",
                    margin: "25px 0px",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  <span color="#0F3156">Add Data</span>
                  <button className="method b-lightGreen">POST</button>
                </Item>
              </Item>
              <CodeboxPost api_c={Data.link2} />
              <Output field={Data.field} />
            </Grid>
            <Grid item xs={12}>
              <Item>
                <hr className="hr" color="#8ec0f5" />
                <Item
                  sx={{
                    color: "#0F3156",
                    display: "flex",
                    margin: "25px 0px",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  <span color="#0F3156">Delete Data</span>
                  <button className="method b-danger">DELETE</button>
                </Item>
              </Item>
              <Codbox api_c={Data.link3} />
              <Output field={Data.field} />
            </Grid>
            <Grid item xs={12}>
              <Item>
                <hr className="hr" color="#8ec0f5" />
                <Item
                  sx={{
                    color: "#0F3156",
                    display: "flex",
                    margin: "25px 0px",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  <span color="#0F3156">Update Data</span>
                  <button className="method b-lightYellow">PUT</button>
                </Item>
              </Item>
              <CodeboxPost api_c={Data.link4} />
              <Output field={Data.field} />
            </Grid>
            <Grid item xs={12}>
              <Item>
                <hr className="hr" color="#8ec0f5" />
                <Item
                  sx={{
                    color: "#0F3156",
                    display: "flex",
                    margin: "25px 0px",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  <span color="#0F3156">Find Data By Search</span>
                  <button className="method b-lightBlue">GET</button>
                </Item>
              </Item>
              <Codbox api_c={Data.link5} />
              <OutputMulti field={Data.field} />
            </Grid>
          </Stack>
        </Grid>
      </Container>
    </>
  );
};
export default Docspages;
