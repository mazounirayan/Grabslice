import { COMPANY_TITLE } from "@assets/values/strings"
import {  FaPizzaSlice  } from "react-icons/fa";

export default function TitleBig() {

    return (       
        <div className="flex items-center space-x-4 text-orange-400">
            <FaPizzaSlice  className="text-7xl"/>
            <h1 className="text-9xl"> {COMPANY_TITLE}</h1>
        </div>
    );
}