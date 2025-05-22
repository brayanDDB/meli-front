import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductList() {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        fetch("http://localhost:8080/product")
        .then(result => result.json())
        .then(
            final_result => {
                setPhones(final_result);
            },
            error => {
                console.log(error);
            }
        )
    }

    if(phones.length === 0) {
        return (<>
            <p>No products!</p>
        </>);
    }


  return (
    <section className='phones'>
        {
            phones.map(p => {
                return (
                    <article key={p.id} className='phone-item'>
                        <h2><Link to={"/product/" + p.id}>{p.name}</Link></h2>
                        <h3>$ {p.price}</h3>
                        <div className='mask'>
                            <img src={'/images/' + p.image + '.png'} alt=''/>
                        </div>
                    </article>
                )
            })
        }
    </section>
  )
}

export default ProductList