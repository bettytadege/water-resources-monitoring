import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
type SelectFieldProps={
item:Item[],
defaultValue:string,
className?:string
}
type Item={
    label:string,
    value:string
}

function SelectField({item,defaultValue,className}:SelectFieldProps) {
  return (
     <Select defaultValue={defaultValue}>
            <SelectTrigger className={`${className} w-[120px] h-8 border bg-inherit text-slate-purple flex justify-between items-center px-2 rounded`}>
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent className="w-[120px] mt-2 text-slate-purple text-sm bg-white rounded-md">
              <SelectGroup>
                {item.map((list,key)=>(
                   <SelectItem
                   key={key}
                  value={list.value}
                  className="py-2 px-3 rounded  data-highlighted:bg-primary-purple data-highlighted:text-white">
                  {list.label}
                </SelectItem>  
                ))}
               
              </SelectGroup>
            </SelectContent>
          </Select>
  )
}

export default SelectField