import NameFormatter from '@/helpers/Formatters/NameFormatter';

export default class NewsFormatter {
  static format(news) {
    const AUTHOR_NAME = NameFormatter.formatName(
      news.byline.person[0].firstname,
      news.byline.person[0].middlename,
      news.byline.person[0].lastname
    );

    const IMG_SRC =
      news.multimedia.length !== 0
        ? `https://www.nytimes.com/${news.multimedia[43].url}`
        : '/assets/images/no-image.png';

    return {
      img: IMG_SRC,
      abstract: news.abstract,
      subSectionName: news.section_name,
      main: news.main,
      headline: news.headline.main,
      printHeadline: news.headline.print_headline,
      author: AUTHOR_NAME,
      publishedDate: new Date(news.pub_date).toLocaleDateString('en', { dateStyle: 'long' }),
      src: news.web_url
    };
  }
}
