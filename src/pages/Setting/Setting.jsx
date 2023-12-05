import React, { useEffect, useState } from "react";
import "./Setting.scss";
import {
  useGetStakeMutation,
  useSetStakeMutation,
} from "../../Services/Settings/Settings";
import Loader from "../../component/Loader/Loader";
import { toast } from "react-toastify";

const Setting = () => {
  const stackArr = [
    "Button Value",
    "Button Value",
    "Button Value",
    "Button Value",
    "Button Value",
    "Button Value",
  ];

  const [trigger, { data: stakeBalance, status, error, isError, isLoading }] =
    useSetStakeMutation();

  const [
    trigge,
    {
      data: getStake,
      status: getStakeStatus,
      error: getError,
      isLoading: getLoading,
    },
  ] = useGetStakeMutation();

  const [activeStack, setActiveStack] = useState(false);

  const [stakeValue, setStakeValue] = useState({});

  useEffect(() => {
    trigge();
  }, []);

  useEffect(() => {
    setStakeValue(getStake?.data);
  }, [getStake]);

  const stackHandleChnager = (name, finalValue) => {
    setStakeValue((prev) => {
      return {
        ...prev,
        [name]: Number(finalValue),
      };
    });
  };

  const betPlaceHandler = () => {
    // item = item;
    trigger(stakeValue);
  };

  const obj = stakeValue && Object.keys(stakeValue);

  useEffect(() => {
    if (stakeBalance?.message) {
      toast.success(stakeBalance?.message);
    }
  }, [stakeBalance]);
  return (
    <div className="settings_cont">
      <div className="settings-heading">Stack Settings</div>
      <div className="values_cont">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="values">
            {obj?.map((item) => {
              return (
                <div key={item} className="stake_value-cont">
                  <label>{item}</label>
                  <input
                    value={stakeValue[item]}
                    onChange={(e) => stackHandleChnager(item, e.target.value)}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className="button" onClick={() => betPlaceHandler()}>
          SUBMIT
        </div>
      </div>
    </div>
  );
};

export default Setting;
