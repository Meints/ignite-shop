import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"


export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camista X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis enim, fuga sint, tenetur corrupti debitis voluptate id voluptatem tempora eum temporibus ducimus nostrum laudantium ipsa dolorum impedit, animi tempore sunt.</p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}