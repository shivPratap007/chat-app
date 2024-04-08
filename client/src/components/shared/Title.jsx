import {Helmet} from "react-helmet-async";

const Title = ({title="Chat app",description="This is yours chit chat app",}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta  name='description' content={description}/>
    </Helmet>
  )
}

export default Title