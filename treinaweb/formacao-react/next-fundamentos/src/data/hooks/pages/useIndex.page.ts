import { BlogPost } from "../../@types/BlogPostInterface";

export default function useIndex() {
    const posts: BlogPost[] = [
        {
            id: '1',
            slug: 'como-se-destacar-no-mercado-de-ti',
            title: 'Como se destacar no mercado de TI?',
            description: 'Confira neste artigo com se destacar no mercado de TI com algumas dicas super importantes que vão te colocar na frente da concorrência.',
            picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2023/05/como-se-destacar-da-concorrencia-400x280.png'

        },
        {
            id: '2',
            slug: 'quais-os-principais-receios-de-um-estudante-de-ti-e-como-lidar-com-eles',
            title: 'Quais os principais receios de um estudante de TI - e como lidar com eles',
            description: 'Se você é um estudante de TI já deve ter tido alguns momentos de se sentir na “síndrome do impostor”. Mas, quais são os motivos desses pensamentos e receios?',
            picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2023/04/principais-receios-estudante-TI-400x280.png'

        }
    ]

    return {
        posts
    }
}