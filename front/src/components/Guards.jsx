import { useEffect, useRef, useState } from "react";

import { Axios } from "../utils/AxiosWithCredentials.js";

import { useSelector } from "react-redux";
import DropDownSelect from "../commons/DropDownSelect.jsx";

export default function Guards() {
  const [select, setSelect] = useState([]);
  const [input, setInput] = useState({});
  const options = useRef([]);
  const { user } = useSelector((state) => state.user);

  const fecthGuards = async () => {
    try {
      const { data } = await Axios.get(`/guards/byclient/${user.id}`);

      setSelect(data);
    } catch (err) {
      console.error(err, "failed get to endpoint");
    }
  };

  const handleSelect = (e) => {
    setInput(e);
  };

  useEffect(() => {
    fecthGuards();
  }, []);

  options.current = select.map((element) => {
    return {
      label: `Guardia: ${element.name} ${element.lastname} Activo: ${element.active}`,
      value: element,
    };
  });

  const handleDelete = () => {};

  const handleModify = () => {};

  return (
    <DropDownSelect
      value={input}
      options={options.current}
      handleSelect={handleSelect}
    />
  );
}
