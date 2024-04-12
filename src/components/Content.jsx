import { Container } from "@mui/material";
import Item from "./Item";
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';

export default function Content() {

    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState();
    const [pagina, setPagina] = useState(1);
    const [limite, setLimite] = useState(62);

    const handleChange = (event, value) => {
        setPagina(value);
        setLimite(value * 62);
    };

    useEffect(() => {
        const fetchData = async () => {
            const requestList = [];
            for (let i = (limite - 61); i <= limite; i++) {
                console.log(limite)
                requestList.push({url:`https://pokeapi.co/api/v2/pokemon/${i}`});
            }
    
            const res = await Promise.all(requestList.map(request => fetch(request.url)));
            const data = await Promise.all(res.map(response => response.json()));
            setItems(data);
            setLoading(false);
        }
        fetchData();
    },[limite]);

    if(isLoading) {
        return (
            <Container className="content" sx={{marginTop:'50px' ,display:'flex',flexDirection:'row', justifyContent:'center', flexWrap:'wrap', gap:'30px'}}>
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
                <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={245}
                height={290}
                />
            </Container>
        );
    }
    return (<>
        <Container className="content" sx={{marginTop:'50px' ,display:'flex',flexDirection:'row', justifyContent:'center', flexWrap:'wrap', gap:'30px'}}>
            {items.map((item, index) => (
                <Item
                initImg={item.sprites.other['official-artwork'].front_default}
                initName={item.name}
                key = {index}
                />
            ))}
        </Container>
        <Pagination count={16} variant="outlined" page={pagina} onChange={handleChange}/>
    </>
    );

}