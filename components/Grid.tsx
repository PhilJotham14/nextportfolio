import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem, AbtSection } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <AbtSection></AbtSection>
      <BentoGrid className="w-full py-2">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      {/* <AbtSection></AbtSection> */}
    </section>
  );
};

// import MergedBentoGrid from "./ui/MergedBentoGrid";

// const Grid = () => {
//   return <MergedBentoGrid />;
// };

export default Grid;
