import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
      }}
    >
      <CircularProgress />
      {/* <h1 >LOADING</h1> */}
    </Box>
  );
}

export default Loader;
