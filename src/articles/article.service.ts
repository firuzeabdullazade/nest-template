import { Injectable } from '@nestjs/common';
import { ArticlesGridItem } from 'src/models/article';
import { FilterArticlesRequest } from 'src/models/filterArticlesRequest';

const articles: ArticlesGridItem[] = [
  {
    postId: 1,
    date: '26 December,2022',
    tag: 'Kitchen Design',
    imageSrc: '/assets/posts/firstArticle.png',
    firstPostImage: '/assets/posts/details image.png',
    secondPostImage: '/assets/posts/secondKitchanImage.png',
    content: 'Let’s Get Solution For Building Construction Work',
    postContent: `<p>
    The kitchen is often referred to as the heart of the home, where culinary delights are created, memories are made, and families gather. Designing a functional and visually appealing kitchen involves a careful balance of aesthetics, ergonomics, and practicality. In this article, we will explore the essential aspects of kitchen design, guiding you through the transformative process of crafting a stunning and efficient culinary space. 
    A well-designed kitchen is more than just a place to cook; it is a space that inspires creativity, fosters efficient workflows, and accommodates the diverse needs of its users. Whether you're starting from scratch or renovating an existing kitchen, understanding your requirements, preferences, and lifestyle is crucial in creating a design that seamlessly integrates with your daily routines.
    </p>
    <p>
    Professional guidance from kitchen designers or interior designers specializing in kitchens can be invaluable. These experts possess in-depth knowledge of space planning, storage solutions, and the latest trends in kitchen design. They can help you optimize the available space, provide insights into material selection, and offer innovative ideas that enhance both the functionality and visual appeal of your kitchen.
    </p>`,
    shortTag: 'Kitchen',
  },

  {
    postId: 2,
    date: '22 December,2022',
    tag: 'Living Design',
    imageSrc: '/assets/posts/secondArticle.png',
    firstPostImage: '/assets/posts/firstLivingRoomImage.png',
    secondPostImage: '/assets/posts/secondLivingRoomImage.jpg',
    content: `Low Cost Latest Invented Interior Designing Ideas`,
    postContent: `<p>
    Creating a living room that reflects your unique style, offers exceptional comfort, and embodies functional elegance requires thoughtful planning and flawless execution. The construction process for your living room is an opportunity to transform an empty space into a welcoming haven where you can relax, entertain, and make lasting memories with loved ones. In this article, we will delve into the essential aspects of building a stunning living room, guiding you from the initial design considerations to the final finishing touches.
    </p>
    <p>
    Your living room serves as the centerpiece of your home, a space where you can showcase your personal taste and create an inviting atmosphere for gatherings and relaxation. From the layout and structural modifications to the choice of materials and finishing details, every decision you make contributes to the overall ambiance and functionality of the room. By approaching the construction process with careful attention to detail and a clear vision of your desired outcome, you can bring your dream living room to life.
    </p>`,
    shortTag: 'Living Room',
  },

  {
    postId: 3,
    date: '25 December,2022',
    tag: 'Interior Design',
    imageSrc: '/assets/posts/thirdArticle.png',
    firstPostImage: '/assets/posts/firstInteriorImage.jpeg',
    secondPostImage: '/assets/posts/secondInteriorImage.jpg',
    content: 'Best For Any Office & Business Interior Solution',
    postContent: `<p>
    Interior design is the art of creating a harmonious and visually appealing space that reflects your personality, enhances functionality, and promotes a sense of well-being. Whether you are starting from scratch or looking to revamp your existing space, the process of interior design encompasses a wide range of considerations and decisions. In this article, we will explore the fundamental aspects of interior design, guiding you through the transformative journey of crafting a stunning and cohesive living space. 
    </p>
    <p>
    The interior design of your home is a reflection of your unique style and preferences. It goes beyond mere aesthetics, encompassing the thoughtful arrangement of furniture, the selection of color schemes, the play of textures, and the integration of lighting and accessories. A well-designed interior has the power to create a sanctuary that nurtures and inspires you, providing a backdrop for your daily activities and personal experiences.When embarking on an interior design project, it is crucial to start with a clear vision. Consider the overall atmosphere you wish to create and the purpose of the space. Think about how you want to feel when you enter the room and what activities will take place there. Understanding the function and mood you desire will serve as a guiding principle throughout the design process.
    </p>`,
    shortTag: 'Interior Design',
  },

  {
    postId: 4,
    date: '26 December,2022',
    tag: 'Kitchen Design',
    imageSrc: '/assets/posts/fourthArticle.png',
    firstPostImage: '/assets/posts/details image.png',
    secondPostImage: '/assets/posts/secondKitchanImage.png',
    content: 'Let’s Get Solution For Building Construction Work',
    postContent: `<p>
    The kitchen is often referred to as the heart of the home, where culinary delights are created, memories are made, and families gather. Designing a functional and visually appealing kitchen involves a careful balance of aesthetics, ergonomics, and practicality. In this article, we will explore the essential aspects of kitchen design, guiding you through the transformative process of crafting a stunning and efficient culinary space. 
    A well-designed kitchen is more than just a place to cook; it is a space that inspires creativity, fosters efficient workflows, and accommodates the diverse needs of its users. Whether you're starting from scratch or renovating an existing kitchen, understanding your requirements, preferences, and lifestyle is crucial in creating a design that seamlessly integrates with your daily routines.
    </p>
    <p>
    Professional guidance from kitchen designers or interior designers specializing in kitchens can be invaluable. These experts possess in-depth knowledge of space planning, storage solutions, and the latest trends in kitchen design. They can help you optimize the available space, provide insights into material selection, and offer innovative ideas that enhance both the functionality and visual appeal of your kitchen.
    </p>`,
    shortTag: 'Kitchen',
  },

  {
    postId: 5,
    date: '22 December,2022',
    tag: 'Living Design',
    imageSrc: '/assets/posts/fifthArticle.png',
    firstPostImage: '/assets/posts/firstLivingRoomImage.png',
    secondPostImage: '/assets/posts/secondLivingRoomImage.jpg',
    content: `Low Cost Latest Invented Interior Designing Ideas`,
    postContent: `<p>
    Creating a living room that reflects your unique style, offers exceptional comfort, and embodies functional elegance requires thoughtful planning and flawless execution. The construction process for your living room is an opportunity to transform an empty space into a welcoming haven where you can relax, entertain, and make lasting memories with loved ones. In this article, we will delve into the essential aspects of building a stunning living room, guiding you from the initial design considerations to the final finishing touches.
    </p>
    <p>
    Your living room serves as the centerpiece of your home, a space where you can showcase your personal taste and create an inviting atmosphere for gatherings and relaxation. From the layout and structural modifications to the choice of materials and finishing details, every decision you make contributes to the overall ambiance and functionality of the room. By approaching the construction process with careful attention to detail and a clear vision of your desired outcome, you can bring your dream living room to life.
    </p>`,
    shortTag: 'Living Room',
  },

  {
    postId: 6,
    date: '25 December,2022',
    tag: 'Interior Design',
    imageSrc: '/assets/posts/sixthArticle.png',
    firstPostImage: '/assets/posts/firstInteriorImage.jpeg',
    secondPostImage: '/assets/posts/secondInteriorImage.jpg',
    content: 'Best For Any Office & Business Interior Solution',
    postContent: `<p>
    Interior design is the art of creating a harmonious and visually appealing space that reflects your personality, enhances functionality, and promotes a sense of well-being. Whether you are starting from scratch or looking to revamp your existing space, the process of interior design encompasses a wide range of considerations and decisions. In this article, we will explore the fundamental aspects of interior design, guiding you through the transformative journey of crafting a stunning and cohesive living space. 
    </p>
    <p>
    The interior design of your home is a reflection of your unique style and preferences. It goes beyond mere aesthetics, encompassing the thoughtful arrangement of furniture, the selection of color schemes, the play of textures, and the integration of lighting and accessories. A well-designed interior has the power to create a sanctuary that nurtures and inspires you, providing a backdrop for your daily activities and personal experiences.When embarking on an interior design project, it is crucial to start with a clear vision. Consider the overall atmosphere you wish to create and the purpose of the space. Think about how you want to feel when you enter the room and what activities will take place there. Understanding the function and mood you desire will serve as a guiding principle throughout the design process.
    </p>`,
    shortTag: 'Interior Design',
  },
];

@Injectable()
export class ArticleService {
  getArticles(): ArticlesGridItem[] {
    return articles;
  }

  getArticleById(id: number): ArticlesGridItem {
    return articles.find((article) => article.postId === id);
  }

  filterArticles(request: FilterArticlesRequest): ArticlesGridItem[] {
    console.log(articles[0].content.search(request.searchword));
    return articles.filter(
      (article) =>
        (request.searchword &&
          (article.content.search(request.searchword) > 0 ||
            article.postContent.search(request.searchword) > 0)) ||
        (!request.searchword &&
          ((request.tag && article.shortTag === request.tag) || !request.tag)),
    );
  }
}
