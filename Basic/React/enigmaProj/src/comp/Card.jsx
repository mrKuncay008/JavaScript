import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import PhotoPrf from '../assets/asu.jpeg';

const CardComp = () => {
    const [isFollowed, setIsFollowed] = React.useState(false);

    return (
        <Card className="w-[400px] h-[200px] bg-black">
        <CardHeader className="justify-between px">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="md" src={PhotoPrf} />
            <div className="flex flex-col font-bold gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-200">geoelcytnZ</h4>
              <h5 className="text-small tracking-tight text-default-500">@singuiltyyyyyy</h5>
            </div>
          </div>
          <Button
            className={isFollowed ? " bg-zinc-900 text-white border-default-200" : ""}
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>
        </CardHeader>
        <CardBody className=" text-m text-default-100">
          <p>
            Hidup Apa-apaan ini Jemb00uttt ! 🤣 <pre></pre>
          </p>
          <span className="pt-2  text-blue-500">
            #createByTailwindCss
            <span className="py-2" aria-label="computer" role="img">
              💻
            </span>
          </span>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter>
      </Card>
    );
};

export default CardComp