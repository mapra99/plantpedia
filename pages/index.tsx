import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Layout } from '@components/Layout'
import { PlantCollection } from '@components/PlantCollection'
import { getPlantList } from '@api'

interface HomeProps {
  plants: Plant[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const plants = await getPlantList({ limit: 10 })

  return { props: { plants } }
}

export default function Home({ plants }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <PlantCollection plants={plants} variant="square" />
    </Layout>
  )
}
