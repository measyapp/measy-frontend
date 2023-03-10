
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ButtonIcon,ListOrderCombobox,SearchBar} from "../components";
import { SearchItems } from "../types/SearchItems";
export interface ListHeaderProps{
    listObjectName : String;
    addButton? :  boolean | true;
    addButtonText? : string;
    buttonLink? : string;
    OnSerching?: Function;
    OnOrder? : Function;
    searchItems?: SearchItems[]
}
export function ListHeader({listObjectName,buttonLink,OnSerching,OnOrder,searchItems,addButton,addButtonText}:ListHeaderProps){
    return(
        <div className=" flex flex-col gap-2">
        <div className=" flex gap-2 xs:place-items-center px-16 justify-between x-14 mt-10 place-content-center">
            {addButton&&<Link to={buttonLink!}> <ButtonIcon icon={<FaPlus size={24}/>} text={addButtonText}/> </Link>}
            <SearchBar placeholder={'Encontrar '+listObjectName} searchItems={searchItems} onSearching={(strBusca : string,strField : string = "") => { if (OnSerching!==undefined) OnSerching(strBusca,strField)}}/>
            <ListOrderCombobox onOrder={OnOrder} /> 
        </div>
        <div className="mx-4 w-7xl h-0.5 outline-4 rounded-xl bg-deep-blue my-2"/>
        </div>
    );
}