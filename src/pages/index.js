import React from 'react'
import MediaQuery from 'react-responsive'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Logo from '../components/logo'
import Nav from '../components/nav'
import FridayImage from '../components/friday'
import SaturdayImage from '../components/saturday'
import SundayImage from '../components/sunday'
import FirstImg from '../images/LouiseVincent-48.jpg'
import SecondImg from '../images/LouiseVincent-96.jpg'
import SleepAirbnb from '../images/dormir-airbnb.jpg'
import SleepCamping from '../images/dormir-camping.jpg'
import SleepIbis from '../images/dormir-ibis.jpg'
import dormirKerverh from '../images/dormir-kerverh.jpg'
import dormirLanouan from '../images/dormir-lanouan.jpg'
import SleepAirbnbBis from '../images/dormir-airbnb-bis.jpg'
import SleepAirbnbVilla from '../images/dormir-airbnb-villa.jpg'
import SleepAirbnbKervignac from '../images/dormir-airbnb-kervignac.jpg'
import SleepAirbnbNeuhe from '../images/dormir-airbnb-neuhe.jpg'
import SleepAirbnbLanguidic from '../images/dormir-languidic.jpg'
import SleepAirbnbKeroman from '../images/dormir-airbnb-keroman.jpg'
import PortraitImg from '../images/LouiseVincent-180.jpg'
import GiftImg from '../images/gift.svg'

import styled from 'styled-components'
import { Box, Flex, Text } from 'rebass'
import { Grid, Col } from '../components/grids'
import { breakpoints, colors } from '../styles/theme'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'

const Container = styled(Flex)`
  width: 100%;
  min-height: 100vh;
  @media (min-width: ${breakpoints.md}) {
    min-height: calc(100vh - 9.7rem);
  }
`;

const Header = styled(Flex)`
  width: 100%;
  flex: 1 1 auto;
`;

const Content = styled(Box)`
  width: 100%;
  max-width: 55rem;
  margin: auto;

  .gatsby-image-wrapper {
    max-width: 32rem;
  }

  @media (min-width: ${breakpoints.md}) {
    max-width: 120rem;
  }
`;

const MinContent = styled(Box)`
  max-width: 45rem;
  margin-right: auto;
  margin-left: auto;
`;

const LogoContainer = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: auto;
`;

const Presentation = styled(Box)`
  display: flex;
  width: 100%;
  background-image: url(${FirstImg});
  background-size: cover;
  background-position: center;

  @media (min-width: ${breakpoints.md}) {
    min-height: 50rem;
  }
`;

const PresentationInner = styled(Box)`
  width: 100%;
  background: rgba(255, 255, 255, .9);
  @media (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    background: linear-gradient(120deg, rgba(255, 255, 255, .9) 50%, transparent 50%);
  }
`;

const Pictures = styled(Box)`
  display: flex;
  width: 100%;
  min-height: 40rem;
  background-image: url(${SecondImg});
  background-size: cover;
  background-position: center;
`;

const PicturesInner = styled(Box)`
  width: 100%;
  background: rgba(255, 255, 255, .9);
  @media (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    background: linear-gradient(120deg, rgba(255, 255, 255, .9) 50%, transparent 50%);
  }
`;

const Quote = styled(Text)`
  padding: 3rem 4rem;
  background-color: rgba(187, 131, 22, .8);
  color: #fff;
  font-family: "Gentium Basic";
`;

const Link = styled(Text)`
  color: ${colors.primary};
  &:hover {
    color: ${colors.primaryDark};
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Mariage', 'Louise Le Bolay', 'Vincent Desdoigts', '2019']} />
    <Container alignItems="center" flexDirection="column">
      <Header>
        <Text width={1/1} textAlign="center" m="auto">
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Box pt="2rem">
            <Text as="h1">22 Juin 2019</Text>
            <Text as="h2">Gâvres / Lambezegan</Text>
          </Box>
        </Text>
      </Header>
    </Container>

    <Nav />

    <Presentation mt={['3rem', '3rem', 0]}>
      <PresentationInner>
        <Content>
          <Grid alignItems="center">
            <Col width={[1/1, 1/1, 1/2]}>
              <Text width={1/1} pl={['2rem', '2rem', '4rem']} pr={['2rem', '2rem', '2rem']} py={['5rem', '5rem', '6rem']} fontSize={['1.6rem', '1.8rem', '2rem']} textAlign={['center', 'center', 'left']}>
                <Title as="h2">Le 22 juin 2019 arrive à grands pas&nbsp;!</Title>
                <Text as="p">Nous avons hâte de faire de ce weekend un moment<br/> inoubliable entouré de nos familles et amis.</Text>
                <Text as="p">Pour cela il est important que vous trouviez<br/> tous le chemin ainsi que le programme.</Text>
              </Text>
            </Col>
            <Col width={[1/1, 1/1, 1/2]} justifyContent="center">
              <Flex pb="1rem" alignItems="center" justifyContent="flex-end" px={['2rem', '2rem', '2rem']} pb={['5rem', '5rem', 0]}>
                <Quote as="h3" mb="0" fontSize={['2.2rem', '2.2rem', '3rem']} textAlign={['center', 'center', 'left']}>“ Sous le soleil ou sous la pluie,<MediaQuery minWidth={breakpoints.lg}><br/></MediaQuery> nous avons prévu de nous dire oui&nbsp;! ”</Quote>
              </Flex>
            </Col>
          </Grid>
        </Content>
      </PresentationInner>
    </Presentation>

    {/* <Oblique>
      <Content>
        <Grid>
          <Col width={[1/1, 1/1, 1/2]}>
            <Text width={1/1} pl={['2rem', '2rem', '4rem']} pr={['2rem', '2rem', '2rem']} py={['5rem', '5rem', '6rem']} fontSize={['1.6rem', '1.6rem', '2rem']} textAlign={['center', 'center', 'left']}>
              <Text as="h2" pb="1rem" mb="0" fontSize={['1.8rem', '1.8rem', '2.4rem']}>Le 22 juin 2019 arrive à grands pas&nbsp;!</Text>
              <Text as="p">Nous avons hâte de faire de ce weekend un moment<br/> inoubliable entouré de nos familles et amis.</Text>
              <Text as="p">Pour cela il est important que vous trouviez<br/> tous le chemin ainsi que le programme.</Text>
            </Text>
          </Col>
          <Col width={[1/1, 1/1, 1/2]} justifyContent="center">
            <Flex pb="1rem" alignItems="center" justifyContent="center" px={['2rem', '2rem', '2rem']} pb={['5rem', '5rem', 0]}>
              <Text as="h3" mb="0" color={colors.primary} fontFamily="Gentium Basic" fontSize={['2.2rem', '2.2rem', '3rem']} textAlign="center">“ Sous le soleil ou sous la pluie,<MediaQuery minWidth={breakpoints.lg}><br/></MediaQuery> nous avons prévu de nous dire oui&nbsp;! ”</Text>
            </Flex>
          </Col>
        </Grid>
      </Content>
    </Oblique> */}
    {/* <FullImg /> */}

    <Box id="programme" pt="6rem">
      <Content pb="2rem" px={['2rem', '2rem', '4rem']}>
        <Grid>
          <Col width={[1/1, 1/1, 1/2]} pb="5rem">
            <MinContent>
              <Text pt={'4rem'} fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
                <FridayImage />
                <Subtitle as="h3" color={colors.primary} pt="2rem">Plage et rosé</Subtitle>
                <Text as="p">Nous vous donnons rendez vous à partir de 17h sur la plage du Lines à Gâvres pour le début des festivités, car oui il fera beau&nbsp;!</Text>
                <a href="https://www.google.com/maps/place/Plage+De+Lines/@47.6849948,-3.2861637,16.25z/data=!4m8!1m2!2m1!1splage+gavres!3m4!1s0x4810670452513d65:0x852dfe7d02462220!8m2!3d47.6839426!4d-3.2835469"></a>
              </Text>
              <Text pt={'4rem'} fontSize={['1.6rem', '1.6rem', '2rem']} textAlign="left">
                <SundayImage />
                <Subtitle as="h3" color={colors.primary} pt="2rem">Brunch et pétanque</Subtitle>
                <Text as="p">Après une bonne, mais courte, nuit de sommeil nous vous invitons à venir bruncher avec nous et profiter de ce beau dimanche tous ensemble.</Text>
                <a href="https://www.google.com/maps/place/Plage+De+Lines/@47.6849948,-3.2861637,16.25z/data=!4m8!1m2!2m1!1splage+gavres!3m4!1s0x4810670452513d65:0x852dfe7d02462220!8m2!3d47.6839426!4d-3.2835469"></a>
              </Text>
            </MinContent>
          </Col>
          <Col width={[1/1, 1/1, 1/2]} pb="5rem">
            <MinContent>
              <Text pt={'4rem'} fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
                <SaturdayImage />
                <Box>
                  <Subtitle as="h3" color={colors.primary} pt="2rem">Mairie en petit comité</Subtitle>
                  <Text as="p">A 12h30, entourés de nos familles proches et de nos témoins, nous serons reçus à Gâvres par Monsieur le Maire.</Text>
                </Box>
                <Box>
                  <Subtitle as="h3" color={colors.primary} pt="2rem">Cérémonie religieuse</Subtitle>
                  <Text as="p">C’est en l'Église Saint Gildas de Gâvres que nous avons décidé de nous marier, nous serons heureux de tous vous retrouver à 15h pour célébrer notre mariage.</Text>
                </Box>
                <Box>
                  <Subtitle as="h3" color={colors.primary} pt="2rem">Vin d’honneur</Subtitle>
                  <Text as="p">Après quelques photos à Gâvres nous prendrons la route direction Lambezegan pour trinquer ensemble et débuter cette très longue soirée !</Text>
                  <Text as="p">Attention le vin d’honneur aura lieu dans l’herbe, les talons aiguilles ne seront pas vos meilleurs amis&nbsp;!</Text>
                </Box>
              </Text>
            </MinContent>
          </Col>
        </Grid>
      </Content>
    </Box>

    <Pictures id="photos">
      <PicturesInner>
        <Content>
          <Grid>
            <Col width={[1/1, 1/1, 1/2]}>
              <Text width={1/1} pl={['2rem', '2rem', '4rem']} pr={['2rem', '2rem', '2.8rem']} py={['5rem', '5rem', '6rem']} fontSize={['1.6rem', '1.8rem', '2rem']} textAlign={['center', 'center', 'left']}>
                <Title as="h2">On adore les photos et vous aussi&nbsp;!</Title>
                <Text as="p">Alors pour n’en manquer aucune ajoutez ce hashtag sur vos photos #OnSeMariePourDeVrai ou partagez les via l’application Wedshoots.</Text>
                <Text>Une fois installée vous pourrez accéder à l’album en entrant votre prénom et le code suivant <Text fontWeight="500">FRe909307b</Text></Text>
              </Text>
            </Col>
            <Col width={[1/1, 1/1, 1/2]} justifyContent="center">
              <Flex pb="1rem" alignItems="center" justifyContent="center" px={['2rem', '2rem', '2rem']} pb={['5rem', '5rem', 0]}>
                <Quote as="h3" mb="0" fontSize={['2.2rem', '2.2rem', '3rem']}>#OnSeMariePourDeVrai</Quote>
              </Flex>
            </Col>
          </Grid>
        </Content>
      </PicturesInner>
    </Pictures>

    <Box id="infos" pt="2rem">
      <Content pb="2rem">
        <Grid>
          <Col width={[1/1, 1/1, 2/3]}>
            <Text pt={'4rem'} pl={['2rem', '2rem', '4rem']} pr={['2rem', '2rem', '2rem']} fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <Title as="h2" color={colors.primary}>Liste de mariage</Title>
              <Text>Comme nous ne faisons rien comme tout le monde notre voyages de noces aura lieu avant le mariage !<br/>
              Nous partons faire un tour en Asie dès février. Voici quelques idées de cadeaux qui font autant rêver !</Text>
              <Box mt="2rem">
                <Link as="a" href="http://www.millemercismariage.com/onsemariepourdevrai/liste.html">
                  <Flex as="span" alignItems="center">
                    <Box pr="2rem">
                      <img width="50rem" height="30rem" src={GiftImg} style={{ marginBottom: 0 }} />
                    </Box>
                    <Box as="span" pb="1rem">Voir la cagnotte</Box>
                  </Flex>
                </Link>
              </Box>
            </Text>
          </Col>
        </Grid>
      </Content>
    </Box>

    <Box id="infos" pt="2rem">
      <Content pb="2rem">
        <Grid>
          <Col width={[1/1, 1/1, 2/3]}>
            <Text pt={'4rem'} pl={['2rem', '2rem', '4rem']} pr={['2rem', '2rem', '2rem']} fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <Title as="h2" color={colors.primary}>Comment venir&nbsp;?</Title>
              <Text as="p">Attention la voiture est indispensable pour se rendre à Gâvres et à Lambezegan. N’hésitez pas à faire du covoiturage pour mutualiser les voitures.</Text>
            </Text>
          </Col>
        </Grid>
        <Grid>
          <Col width={[1/1, 1/1, 1/2]} pb="3rem">
            <Text pt={'4rem'} pl={['2rem', '2rem', '4rem']} pr={['2rem', '2rem', '2rem']} fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <Text as="p"><Text as="span" fontWeight="500">Adresse de l’Eglise :</Text> Rue de Porh Guerh, 56680 Gâvres - <Link as="a" href="maps">Voir sur Maps</Link></Text>
              
              <Text as="p">Trois parking à proximité&nbsp;:</Text>
              <ul>
                <li>1/ Places de stationnement vers le 21 Rue de Porh Puns</li>
                <li>2/ Parking devant le cimetière 27-33 Rue de la Grande Plage</li>
                <li>3/ Parking de Porh Guerh à gauche du 7 Rue des Anseaux</li>
              </ul>
              <Text as="p">Merci de laisser les places de stationnements devant l’Eglise pour les personnes à mobilité réduites.</Text>
            </Text>
          </Col>
          <Col width={[1/1, 1/1, 1/2]} pb="3rem">
            <Text pt={'4rem'} pl={['2rem', '2rem', '4rem']} pr={['2rem', '2rem', '2rem']} fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <Text as="p"><Text as="span" fontWeight="500">Adresse du vin d’honneur et dîner&nbsp;:</Text> Lambezegan 56440 Languidic - <Link as="a" href="maps">Voir sur Maps</Link></Text>
              <Text as="p">Des places de stationnement seront indiquées<br/>
              Les gares les plus proches&nbsp;: Auray ou Vannes<br/>
              Les aéroports les plus proches&nbsp;: Lorient, Rennes ou Nantes</Text>
            </Text>
          </Col>
          <Col width={[1/1, 1/1, 2/3]} pb="3rem">
            <Text pt={'4rem'} pl={['2rem', '2rem', '4rem']} pr={['2rem', '2rem', '2rem']} fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <Title as="h2" color={colors.primary}>Venir avec un enfant</Title>
              <Text as="p">Attention un point d’eau non sécurisé est à proximité du lieu de réception. La sécurité des enfants est à la charge des parents.</Text>
              <Text as="p">Des baby-sitters sont prévues à partir du dîner, merci de nous prévenir si vous comptez venir avec votre mini vous&nbsp;!</Text>
            </Text>
          </Col>
        </Grid>
      </Content>
    </Box>

    <Box id="infos" pt="2rem">
      <Content pb="2rem" pl={['2rem', '2rem', '4rem']} pr={['2rem', '2rem', '2rem']}>
        <Grid pb="2rem">
          <Col width={[1/1, 1/1, 2/3]}>
            <Text pt={'4rem'} fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <Title as="h2" color={colors.primary}>Où dormir&nbsp;?</Title>
              <Text as="p">Voici quelques adresses pour loger à proximité du mariage.</Text>
            </Text>
          </Col>
        </Grid>
        <Grid>
          <Col width={[1/1, 1/2, 1/3]} pb="3rem">
            <Text fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <img src={SleepCamping} />
              <Text as="p" fontWeight="500">Camping de Pont Augan</Text>
              <Text as="p">3 euros la nuit par campeur à 2 minutes de voiture</Text>
              <Link as="a" color={colors.primary} href="http://www.camping-pontaugan.com/disponibilites/" target="_blank">Réserver</Link>
            </Text>
          </Col>
          <Col width={[1/1, 1/2, 1/3]} pb="3rem">
            <Text fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <img src={SleepAirbnb} />
              <Text as="p" fontWeight="500">Chambre dans une maison Airbnb</Text>
              <Text as="p">30 euros la nuit pour 2 personnes à 8 minutes en voiture</Text>
              <Link as="a" color={colors.primary} href="https://www.airbnb.fr/rooms/20883179?adults=2&check_in=2019-06-21&check_out=2019-06-23&guests=1&s=hPV9obUx" target="_blank">Réserver</Link>
            </Text>
          </Col>
          <Col width={[1/1, 1/2, 1/3]} pb="3rem">
            <Text fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <img src={SleepIbis} />
              <Text as="p" fontWeight="500">Chambre d’hôtel ibis budget Lorient Hennebont</Text>
              <Text as="p">44 euros la nuit pour 2 personnes à 15 minutes de voiture</Text>
              <Link as="a" color={colors.primary} href="https://bit.ly/2At9Jb5" target="_blank">Réserver</Link>
            </Text>
          </Col>
          <Col width={[1/1, 1/2, 1/3]} pb="3rem">
            <Text fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <img src={dormirKerverh} />
              <Text as="p" fontWeight="500">Chambre d’hôtes Kerverh</Text>
              <Text as="p">63 euros la nuit pour 2 personnes à 20 minutes de voiture</Text>
              <Link as="a" color={colors.primary} href="https://www.booking.com/hotel/fr/kerverh.fr.html?aid=301664;label=languidic-8m*r36kpRLPjw*RFI*f8aQS154566395262:pl:ta:p12:p2:ac:ap1t1:neg:fi:tiaud-285284111406:kwd-13070087121:lp9055289:li:dec:dm;sid=82eb97c5584eeb434ec0a30047555018;all_sr_blocks=360924001_118683635_0_1_0;checkin=2019-06-22;checkout=2019-06-23;dest_id=-1437183;dest_type=city;dist=0;group_adults=2;hapos=6;highlighted_blocks=360924001_118683635_0_1_0;hpos=6;room1=A,A;sb_price_type=total;spdest=ci/-1437183;sr_order=popularity;srepoch=1546442893;srpvid=67fb6cc6e4fe0040;type=total;ucfs=1&#hotelTmpl" target="_blank">Réserver</Link>
            </Text>
          </Col>
          <Col width={[1/1, 1/2, 1/3]} pb="3rem">
            <Text fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <img src={dormirLanouan} />
              <Text as="p" fontWeight="500">Château de Lannouan</Text>
              <Text as="p">166 euros la nuit chambre deluxe pour 2 personnes à 20 minutes de voiture</Text>
              <Link as="a" color={colors.primary} href="https://www.booking.com/hotel/fr/chateau-de-lannouan.fr.html?aid=301664;label=languidic-8m*r36kpRLPjw*RFI*f8aQS154566395262:pl:ta:p12:p2:ac:ap1t1:neg:fi:tiaud-285284111406:kwd-13070087121:lp9055289:li:dec:dm;sid=82eb97c5584eeb434ec0a30047555018;all_sr_blocks=445804904_133887253_2_1_0;checkin=2019-06-22;checkout=2019-06-23;dest_id=-1437183;dest_type=city;dist=0;group_adults=2;hapos=10;highlighted_blocks=445804904_133887253_2_1_0;hpos=10;room1=A,A;sb_price_type=total;spdest=ci/-1437183;sr_order=popularity;srepoch=1546442893;srpvid=67fb6cc6e4fe0040;type=total;ucfs=1&#hotelTmpl" target="_blank">Réserver</Link>
            </Text>
          </Col>
          <Col width={[1/1, 1/2, 1/3]} pb="3rem">
            <Text fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <img src={SleepAirbnbBis} />
              <Text as="p" fontWeight="500">Maison en pierre Airbnb</Text>
              <Text as="p">50 euros la nuit pour 4 personnes (2 chambres) à 10 minutes en voiture</Text>
              <Link as="a" color={colors.primary} href="https://www.airbnb.fr/rooms/2840558?location=Lamb%C3%A9z%C3%A9gan%2C%20Languidic%2C%20France&adults=4&check_in=2019-06-21&check_out=2019-06-23&guests=1&s=vj4vRsqD" target="_blank">Réserver</Link>
            </Text>
          </Col>
          <Col width={[1/1, 1/2, 1/3]} pb="3rem">
            <Text fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <img src={SleepAirbnbVilla} />
              <Text as="p" fontWeight="500">Appartement dans villa contemporaine Airbnb</Text>
              <Text as="p">50 euros la nuit pour 4 personnes (2 chambres) à 20 minutes de voiture</Text>
              <Link as="a" color={colors.primary} href="https://www.airbnb.fr/rooms/6054725?location=Lamb%C3%A9z%C3%A9gan%2C%20Languidic%2C%20France&adults=4&check_in=2019-06-21&check_out=2019-06-23&guests=1&s=XHJPgHF6" target="_blank">Réserver</Link>
            </Text>
          </Col>
          <Col width={[1/1, 1/2, 1/3]} pb="3rem">
            <Text fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <img src={SleepAirbnbKervignac} />
              <Text as="p" fontWeight="500">Maison Kervignac airbnb </Text>
              <Text as="p">65 euros la nuit pour 6/8 personnes (3 chambres) à 15 minutes de voiture</Text>
              <Link as="a" color={colors.primary} href="https://www.airbnb.fr/rooms/15003888?location=Lamb%C3%A9z%C3%A9gan%2C%20Languidic%2C%20France&adults=4&check_in=2019-06-21&check_out=2019-06-23&guests=1&s=GcCoyicE" target="_blank">Réserver</Link>
            </Text>
          </Col>
          <Col width={[1/1, 1/2, 1/3]} pb="3rem">
            <Text fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <img src={SleepAirbnbNeuhe} />
              <Text as="p" fontWeight="500">Gite TY NEUHE Airbnb</Text>
              <Text as="p">140 euros la nuit pour 8 personnes (4 chambres) à 10 minutes en voiture</Text>
              <Link as="a" color={colors.primary} href="https://www.airbnb.fr/rooms/19332131?location=Lamb%C3%A9z%C3%A9gan%2C%20Languidic%2C%20France&adults=4&check_in=2019-06-21&check_out=2019-06-23&guests=1&s=MEbr9Pdj" target="_blank">Réserver</Link>
            </Text>
          </Col>
          <Col width={[1/1, 1/2, 1/3]} pb="3rem">
            <Text fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <img src={SleepAirbnbLanguidic} />
              <Text as="p" fontWeight="500">Gîte de la Longère</Text>
              <Text as="p">450 euros la nuit pour 10 personnes à 10 minutes de voiture</Text>
              <Link as="a" color={colors.primary} href="https://www.booking.com/hotel/fr/gite-de-la-longere-languidic.fr.html?aid=301664;label=languidic-8m*r36kpRLPjw*RFI*f8aQS154566395262:pl:ta:p12:p2:ac:ap1t1:neg:fi:tiaud-285284111406:kwd-13070087121:lp9055289:li:dec:dm;sid=82eb97c5584eeb434ec0a30047555018;all_sr_blocks=308847101_129128063_10_0_0;checkin=2019-06-22;checkout=2019-06-23;dest_id=-1437183;dest_type=city;dist=0;group_adults=2;hapos=2;highlighted_blocks=308847101_129128063_10_0_0;hpos=2;room1=A,A;sb_price_type=total;spdest=ci/-1437183;sr_order=popularity;srepoch=1546442893;srpvid=67fb6cc6e4fe0040;type=total;ucfs=1&#hotelTmpl" target="_blank">Réserver</Link>
            </Text>
          </Col>
          <Col width={[1/1, 1/2, 1/3]} pb="3rem">
            <Text fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <img src={SleepAirbnbKeroman} />
              <Text as="p" fontWeight="500">Longère de Keroman Airbnb</Text>
              <Text as="p">330 euros la nuit pour 10 voyageurs à 10 minutes en voiture</Text>
              <Link as="a" color={colors.primary} href="https://www.airbnb.fr/rooms/23088292?adults=2&check_in=2019-06-21&check_out=2019-06-23&guests=1&s=ucod8Bar" target="_blank">Réserver</Link>
            </Text>
          </Col>
        </Grid>
      </Content>
    </Box>

    <Box pt="4rem">
      <Content pb="2rem" pl={['2rem', '2rem', '4rem']} pr={['2rem', '2rem', '2rem']}>
        <Grid>
          <Col width={[1/1, 1/2, 3/5]} pb="3rem">
            <Text pt={'2rem'} fontSize={['1.6rem', '1.8rem', '2rem']} textAlign="left">
              <Title as="h2" color={colors.primary}>Nous contacter</Title>
              <Text as="p"><b>onsemariepourdevrai@gmail.com</b></Text>
              <Text as="p">N’oubliez pas de renvoyer votre<br/> confirmation de présence par courrier à :</Text>
              <Text as="p"><b>76 Avenue de Rigny, 94360 Bry-sur-Marne</b></Text>
            </Text>
          </Col>
          <Col width={[1/1, 1/2, 2/5]} pb="3rem">
            <Box>
              <img src={PortraitImg} />
            </Box>
          </Col>
        </Grid>
      </Content>
    </Box>
  </Layout>
)

export default IndexPage
