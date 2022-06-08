import { Box, useMediaQuery, VStack } from '@chakra-ui/react'
import { AdditionalInfo, Bookmarks, GreetingHeader, Sidebar, TopBar } from 'components'
import BottomNav from 'components/BottomNav/BottomNav';
import { urls } from 'constants';
import { fallbackData } from 'constants';

const BookmarksPage = () => {
  const [smallerDevice] = useMediaQuery("(max-width: 900px)");

  return (
    <Box display="flex" gap="12" color="white">
      {smallerDevice ? <BottomNav /> : <Sidebar />}
      <VStack
        minH="100vh"
        flex="2"
        gap="4"
        align="stretch"
        p={`${smallerDevice ? "1rem 1rem 6rem 1rem" : "1rem 0"}`}
      >
        <TopBar />
        <GreetingHeader
          greetingSubHeader={fallbackData.greetingSubHeaderBookmarked}
          greetingDescription={fallbackData.greetingDescriptionBookmarked}
          greetingImg={urls.bookmarkImg}
        />
        <Bookmarks/>
      </VStack>
      {!smallerDevice && <AdditionalInfo />}
    </Box>
  );
}

export default BookmarksPage