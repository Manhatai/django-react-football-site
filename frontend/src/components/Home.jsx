import {React, useEffect, useMemo, useState} from 'react'
import AddBoxIcon from "@mui/icons-material/AddBox";
import {Box, Typography} from '@mui/material'
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import {MaterialReactTable} from "material-react-table";
import AxiosInstance from './Axios.jsx'
import Chip from "@mui/material/Chip";

const Home = () => {

    const [myData, setMyData] = useState([])

    const GetData = () => {
        AxiosInstance.get(`footballclub/`).then((res) => {
            setMyData(res.data)
        })
    }

    useEffect(() =>{
        GetData()
    },[])

    const columns = useMemo(
        () => [
            {
                accessorKey:'name',
                header: 'Name'
            },
            {
                accessorKey:'country_details.name',
                header: 'Country'
            },
            {
                accessorKey:'league_details.name',
                header: 'League'
            },
                        {
                accessorKey:'city',
                header: 'City'
            },
            {
                accessorKey:'attendance',
                header: 'Attendance'
            },{
                accessorKey:'characteristics_names',
                header: 'Characteristics',
                Cell: ({cell}) => (
                    <div style={{display:'flex', gap:'8px', flexWrap:'wrap'}}>
                        {
                            cell.getValue()?.map((char,index) => (
                                <Chip key={index} label={char}/>
                            ))
                        }
                    </div>

                )
            },

        ]
    )

    return(
        <div>
            <Box className={"TopBar"}>
                <CalendarViewMonthIcon/>
                <Typography sx={{marginLeft:'15px', fontWeight:'bold'}} variant='subtitle2'>View all clubs!</Typography>
            </Box>

            <MaterialReactTable
                columns={columns}
                data={myData}
            />
        </div>
    )
}

export default Home