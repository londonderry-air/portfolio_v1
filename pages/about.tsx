import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { BorderBox } from '../components/atoms/box/border'
import { FlexBox } from '../components/atoms/box/flex'
import { Sentence, Word } from '../components/atoms/text/common'
import { UpslideSentence } from '../components/atoms/text/upslide'
import { SkillItem } from '../components/molucules/skill-item'
import { SkillTitle } from '../components/molucules/skill-title'
import useMediaQuery from '../hooks/useMediaQuery'
import { moduler } from '../utils/styles'
import { transitionState, headState } from '../utils/atoms'
import { CertItem } from '../components/molucules/cert-item'
import { usePost } from '../hooks/usePost'

export const Page = () => {
  const [isLine1Show, setLine1Show] = useState(false)
  const [isLine2Show, setLine2Show] = useState(false)
  const [isLine3Show, setLine3Show] = useState(false)
  const [isLine4Show, setLine4Show] = useState(false)
  const isTransitioning = useRecoilValue(transitionState)
  const isMQ = useMediaQuery()
  const setHead = useSetRecoilState(headState)
  const posts = usePost({ category: 'cert' })

  useEffect(() => {
    if (!isTransitioning) {
      setHead({ title: 'ABOUT | Tomoki Shimizu', ogImage: './dog.png' })
      setTimeout(() => setLine1Show(true), 100)
      setTimeout(() => setLine2Show(true), 200)
      setTimeout(() => setLine3Show(true), 300)
      setTimeout(() => setLine4Show(true), 400)
    }
  }, [isTransitioning])

  return (
    <FlexBox
      way={'column'}
      width={'100%'}
      height={'100%'}
      position={'absolute'}
    >
      <FlexBox
        way={'column'}
        width={'100%'}
        height={'100vh'}
        padding={isMQ ? '1em' : `0 ${100 / 12}vw`}
        shrink={'0'}
        alignItems={'flex-start'}
        justifyContent={'center'}
        gap={'30px'}
      >
        <UpslideSentence
          size={isMQ ? `${100 / 13}vw` : '6vw'}
          weight={'600'}
          family={"'Zen Kaku Gothic New', sans-serif"}
          color={'#FFFFFF'}
          v_space={'0.8em'}
          h_space={'0.1em'}
          isShow={isLine1Show}
          deg={'10'}
        >
          HELLO,WORLD
        </UpslideSentence>
        <UpslideSentence
          size={isMQ ? `${100 / 13}vw` : '6vw'}
          weight={'600'}
          family={"'Zen Kaku Gothic New', sans-serif"}
          color={'#FFFFFF'}
          v_space={'0.8em'}
          h_space={'0.1em'}
          isShow={isLine2Show}
          deg={'-10'}
        >
          I???M INTERESTED IN
        </UpslideSentence>
        <UpslideSentence
          size={isMQ ? `${100 / 13}vw` : '6vw'}
          weight={'600'}
          family={"'Zen Kaku Gothic New', sans-serif"}
          color={'#FFFFFF'}
          v_space={'0.8em'}
          h_space={'0.1em'}
          isShow={isLine3Show}
          deg={'20'}
        >
          CREATE SOMETHING
        </UpslideSentence>
        <UpslideSentence
          size={isMQ ? `${100 / 13}vw` : '6vw'}
          weight={'600'}
          family={"'Zen Kaku Gothic New', sans-serif"}
          color={'#FFFFFF'}
          v_space={'0.8em'}
          h_space={'0.1em'}
          isShow={isLine4Show}
          deg={'-20'}
        >
          WITH PROGRAMMING
        </UpslideSentence>
      </FlexBox>
      <FlexBox
        way={'column'}
        padding={isMQ ? '10vh 1em 0 1em' : `10vh ${100 / 12}vw 0 ${100 / 4}vw`}
        width={'100%'}
      >
        <BorderBox
          borderPosition={'bottom'}
          borderWidth={'3px'}
          borderColor={'#FFFFFF'}
          borderStyle={'solid'}
          width={'100%'}
          padding={'0 0 6px 0'}
          margin={'0 0 2em 0'}
        >
          <Word
            size={moduler(-1)}
            family={"'Zen Kaku Gothic New', sans-serif"}
            color={'#FFFFFF'}
            h_space={'0.1em'}
            weight={'600'}
          >
            WHO ARE YOU?
          </Word>
        </BorderBox>
        <FlexBox way={'column'} gap={'1em'}>
          <Sentence
            size={moduler(-1)}
            weight={'500'}
            family={"'Zen Kaku Gothic New', sans-serif"}
            color={'#FFFFFF'}
            h_space={'0.1em'}
            v_space={'2em'}
          >
            {`??????????????????????????????????????????????????????????????????????????????????????????????????????,\n?????????????????????????????????????????????????????????????????????????????????\n?????? Web??????????????????????????????????????????????????????????????????\n???????????????????????????????????????????????????????????????`}
          </Sentence>
        </FlexBox>
      </FlexBox>
      <FlexBox
        way={'column'}
        padding={isMQ ? '4em 1em' : `10vh ${100 / 12}vw 0 ${100 / 4}vw`}
        width={'100%'}
        gap={'4em'}
      >
        <BorderBox
          borderPosition={'bottom'}
          borderWidth={'3px'}
          borderColor={'#FFFFFF'}
          borderStyle={'solid'}
          width={'100%'}
          padding={'0 0 6px 0'}
        >
          <Word
            size={moduler(-1)}
            family={"'Zen Kaku Gothic New', sans-serif"}
            color={'#FFFFFF'}
            h_space={'0.1em'}
            weight={'600'}
          >
            TECH
          </Word>
        </BorderBox>
        <FlexBox
          way={'column'}
          width={'100%'}
          padding={isMQ ? '0 0 15vh 0' : '0 0 15vh 20vw'}
          gap={'4em'}
        >
          <FlexBox way={'column'} width={'100%'}>
            <SkillTitle>LANGUAGE</SkillTitle>
            <SkillItem skill={'Typescript'} status={'???????????????????????????'} />
            <SkillItem skill={'Swift'} status={'??????????????????????????????'} />
            <SkillItem skill={'Python'} status={'?????????'} />
          </FlexBox>
          <FlexBox way={'column'} width={'100%'}>
            <SkillTitle>FRAMEWORK</SkillTitle>
            <SkillItem skill={'Nextjs'} status={'????????????????????????'} />
            <SkillItem skill={'React'} status={'?????????????????????'} />
            <SkillItem skill={'Angular'} status={'???????????????????????????'} />
            <SkillItem skill={'django'} status={'???????????????????????????'} />
            <SkillItem skill={'frourio'} status={'?????????????????????'} />
          </FlexBox>
          <FlexBox way={'column'} width={'100%'}>
            <SkillTitle>SERVERSIDE</SkillTitle>
            <SkillItem skill={'Firestore'} status={'??????????????????????????????'} />
            <SkillItem
              skill={'Firebase Authentication'}
              status={'??????????????????????????????'}
            />
            <SkillItem
              skill={'Firebase Cloud Storage'}
              status={'??????????????????????????????'}
            />
            <SkillItem skill={'AWS(S3, EC2)'} status={'?????????????????????'} />
            <SkillItem
              skill={'GCP???Cloud Storage???'}
              status={'?????????????????????'}
            />
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox
        way={'column'}
        padding={isMQ ? '4em 1em' : `10vh ${100 / 12}vw 10vh ${100 / 4}vw`}
        width={'100%'}
        gap={'2em'}
      >
        <BorderBox
          borderPosition={'bottom'}
          borderWidth={'3px'}
          borderColor={'#FFFFFF'}
          borderStyle={'solid'}
          width={'100%'}
          padding={'0 0 6px 0'}
        >
          <Word
            size={moduler(-1)}
            family={"'Zen Kaku Gothic New', sans-serif"}
            color={'#FFFFFF'}
            h_space={'0.1em'}
            weight={'600'}
          >
            CERTIFICATION
          </Word>
        </BorderBox>
        <FlexBox way={'column'} width={'100%'} gap={'1em'}>
          {posts.map((p) => (
            <CertItem
              key={p.slug}
              name={p.title ?? ''}
              certId={p.slug ?? '/about'}
              date={p.release}
              color={p.custom ? p.custom.color ?? '#FFFFFF' : '#FFFFFF'}
            />
          ))}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

export default Page
