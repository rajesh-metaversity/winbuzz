import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./styles.css";
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
      {/* <i className="fa fa-spinner" aria-hidden="true"></i> */}
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <CircularProgress /> */}
    </Box>
  );
}

export default Loader;
