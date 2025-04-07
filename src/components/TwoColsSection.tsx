import { Box } from "@mui/material"

const TwoColsSection=({img,reversed,children})=>{
    return(      <Box className={`flex ${reversed?'flex-row-reverse':'flex-row'} justify-center items-center gap-15 w-full p-20 `}>
            {children}
        <Box className="flex-1 justify-center items-center">
          <img
            src={img}
            alt="Trust duPont Registry Logistics"
            className="flex-1 justify-center items-center object-cover rounded-xl aspect-square"
          />
        </Box>
      </Box>)
}
export default TwoColsSection