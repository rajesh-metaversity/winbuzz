import CloseIcon from "@mui/icons-material/Close";
import "./RulesModal.scss";
import { Collapse, Button } from "@mui/material";
import { useState } from "react";

const RulesModal = ({ setOpen }) => {
  const rulesArray = [
    "Football Fancy",
    "Big Bash League",
    "Lunch Favourite",
    "BookMaker",
    "Football Fancy",
    "Football Fancy",
    "Football Fancy",
  ];

  const [openStates, setOpenStates] = useState(
    Array(rulesArray.length).fill(false)
  );

  const toggleCollapse = (index) => {
    const newOpenStates = openStates.map((item, i) =>
      i === index ? !item : false
    );
    setOpenStates(newOpenStates);
  };

  return (
    <div className="bonus_rule_modal">
      <div className="modale_heading">
        Rules
        <span onClick={() => setOpen(false)}>
          <CloseIcon />
        </span>
      </div>

      <div className="collapse_cont">
        {rulesArray?.map((rule, index) => (
          <div key={index}>
            <Button
              className="collapse_button"
              onClick={() => toggleCollapse(index)}
            >
              {rule}
            </Button>
            <Collapse in={openStates[index]}>
              <div className="collapse_para_cont">
                <div className="collapse_sub-cont">
                  <p className="para">
                    Company reserves the right to suspend/void any id/bets if
                    the same is found to be illegitimate. For example incase of
                    vpn/robot-use/multiple entry from same IP/ multiple bets at
                    same time (Punching) and others. Note : only winning bets
                    will be voided...
                  </p>
                  <p className="para">
                    Tournament Total Goals, Team Total Goals goals.scored in 90
                    minutes or in extra-time will count.Goals scored in penalty
                    shootouts do not count.
                  </p>
                  <p className="para">
                    Tournament Corners - Only corners taken in 90 minutes count.
                  </p>
                  <p className="para">
                    Tournament Penalties Missed/Converted - Penalties taken in
                    90 minutes, extra-time and penalty shootouts all count. If a
                    penalty has to be re-taken the previous disallowed
                    penalty(ies) do not count.
                  </p>
                </div>
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RulesModal;
