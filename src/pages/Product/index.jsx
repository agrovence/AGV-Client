import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'components/Tabs';

import Header from 'components/Header';
import Footer from 'components/Footer';
import productImage from 'assets/image.png';
import { Container, Title, Image, Price, Description } from './styles';

const Product = () => (
    <Container>
        <Header />
        <Title>GPS EZ-Guide 250</Title>
        <Image src={productImage} alt="product" />
        <Tabs>
            <TabList>
                <Tab>Descrição</Tab>
                <Tab>Manual2</Tab>
                <Tab>+ Informações</Tab>
            </TabList>

            <TabPanel>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dapibus nisl at faucibus ullamcorper ac. Proin non a proin
                    adipiscing sed facilisi diam. Tellus erat pulvinar massa, id
                    massa est suscipit a. In neque etiam aliquam rhoncus, cursus
                    feugiat. Elit a vulputate sit ipsum. Sed vitae feugiat
                    imperdiet dignissim in pulvinar pharetra, turpis. Eu non
                    auctor bibendum pharetra lacus volutpat condimentum sed.
                    Enim feugiat quis bibendum id libero. Eget suspendisse
                    fermentum malesuada suscipit amet bibendum. Eget condimentum
                    lobortis orci, sed neque, ut arcu morbi. Morbi sem porttitor
                    semper sit in luctus curabitur tempor tristique. Ac dui
                    senectus facilisi vel integer amet porttitor egestas
                    gravida. Malesuada ut sed mi eget mattis sed diam hendrerit
                    sed. Viverra molestie leo tellus, turpis mauris morbi
                    egestas ultrices habitant. Amet, elementum nisi a quis
                    cursus nisi. Nunc sit blandit pellentesque ultricies vel,
                    tincidunt eros varius. Scelerisque pharetra sed suspendisse
                    nunc et dictumst nulla ipsum. Nunc, elementum malesuada
                    placerat pharetra iaculis. In risus, ultricies enim, nisl
                    porttitor. Egestas venenatis convallis volutpat consectetur.
                    Enim scelerisque nec odio lobortis in mauris amet amet.
                    Tempor sed metus neque nisl. A risus gravida gravida viverra
                    id id cras tristique. In nibh orci volutpat adipiscing
                    aenean sit sapien, nibh. Pretium posuere cursus viverra in.
                    Scelerisque habitant sit ut tincidunt velit accumsan
                    hendrerit at purus. Ac massa molestie scelerisque ipsum
                    facilisis risus lobortis. Lorem nunc, purus non ornare
                    suspendisse adipiscing. Sagittis, tortor tempus, orci,
                    sollicitudin quisque eu iaculis viverra. Neque ut purus
                    lectus hendrerit tincidunt lorem at magnis sit. In lectus
                    senectus in arcu. Vestibulum quis ornare sed eget. Aliquet
                    nisi, neque viverra pharetra, enim duis interdum.
                </Description>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        </Tabs>
        <Price />
        <Footer />
    </Container>
);

export default Product;
