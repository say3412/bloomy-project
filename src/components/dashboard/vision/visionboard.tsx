import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Masonry } from '@mui/lab';
import { Box } from "@mui/material";

const user = {
  name: 'Sofia Rivers',
  avatar: '/assets/avatar.png',
  jobTitle: 'Senior Developer',
  country: 'USA',
  city: 'Los Angeles',
  timezone: 'GTM-7',
} as const;

interface VisionBoardProps {
  id: number;
  src: string;
}

export function VisionBoard(): React.JSX.Element {
  const images: VisionBoardProps[] = [
    {
      id: 4190327,
      src: "https://pixabay.com/get/g554a2780607e7be32470c5a6104325120256f295a057458edd3a39cb3c83aaa874b464c71ccd473eca0a0803995a9342_640.jpg"
    },
    {
      id: 2583442,
      src: 'https://pixabay.com/get/g59d6dbfa426a7be588b240ce78256a9cab00b656a98d6362fd9781d82d3574868aa401904e693261f44b23e9dc29c3a6e781b4aaaf26de2cd4dabd33cb750e1b_640.jpg'
    },
    {
      id: 4702060,
      src: 'https://pixabay.com/get/g98ad2e878f841e383ccb728dedd7f64e626584a06b7f6526c12ef683f9ae1b5c6b73832e74ff36edefd1104804c0f83c58db18f90c9609c3a707baac98a68c9d_640.jpg'
    },
    {
      id: 4190327,
      src: 'https://pixabay.com/get/g70bdad1628f348de0cf4538481598bc22054cacf0fc4994c06b33f6bf3079dc3067da21ae151bf6d69f4ea021f909fb512ad3ff04cdd03e7d0162d86fcdd7c86_640.jpg'
    },
    {
      id: 2116093,
      src: 'https://pixabay.com/get/gf76a4f6fca9a1b1a3bdfdc9bb28cc1645d0c8f26ac05456b42230889d322c2cf83efd6167a1336cf6cd3efa9017c0a39e7af0f58e69788dffabdb8d12897545c_640.jpg'
    },
    {
      id: 171902,
      src: 'https://pixabay.com/get/g1a0663f11b16723d76123b15d10530839d3ee8623b0137c6696cb906b3b4c700543ee54dd0fa23a2b63942d077871a41_640.jpg'
    },
    {
      id: 4477874,
      src: 'https://pixabay.com/get/g3abb7c497160c924e5b4f31fe0ef2fac889d98a600dd0ebc8ba03d2dbffa5ab2674757aa349a73e980d9ebd444c4c878cb3213ef0cc84ebcb78f4727a92a2261_640.jpg'
    },
    {
      id: 2431471,
      src: 'https://pixabay.com/get/g2d945b747aac01ea585b7d97708fd3df39832a51384cefeefa259de31574a9421f078ecf61c0c4fc60e460c1243d9283c84ebd5336081c5c61eeeac5fae85f75_640.jpg'
    },
    {
      id: 1443244,
      src: 'https://pixabay.com/get/ga08eef60697ae45bffd671dfbe67fb84888bffad8feb7cd9449558190bb6990b8463136b07b815e63c7769032364d33eb4f8f4c6741921e0c637a2ddcaa0a9c2_640.jpg'
    },
    {
      id: 2565478,
      src: 'https://pixabay.com/get/g56c75af143b107ae9f225a7c9ccca6e60eaadd9adfc35e3a6f68ecf3808485df1f928bf1090c91a25ad54ac47d0667bbc50273f238b1ae8baf5e3a594d24b14c_640.jpg'
    },
  ];
  return (
    <Card>
      <Box
        sx={{
          overflowY: "auto",
          p: 2,
          bgcolor: "#fafafa",
        }}
      >
        <Masonry columns={4} spacing={2}>
          {images.map((img, index) => (
            <Box
              key={index}
              sx={{
                overflow: "hidden",
                borderRadius: 1.5,
              }}
            >
              <img
                src={img.src}
                alt=""
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: 12,
                }}
              />
            </Box>
          ))}
        </Masonry>
      </Box>
    </Card>
  );
}
