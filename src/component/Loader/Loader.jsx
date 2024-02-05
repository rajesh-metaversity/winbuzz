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
        // position: "absolute",
        // top: "0",
        // left: "0",
        backgroundColor: "transparent !important",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;
