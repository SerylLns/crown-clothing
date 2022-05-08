import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.style";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
