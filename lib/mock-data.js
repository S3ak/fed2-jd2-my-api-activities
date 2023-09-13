import { faker } from "@faker-js/faker";

faker.seed(123);

const TAGS = ["history", "american", "crime"];

function createRandomUser() {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.email({
    firstName,
    lastName,
  });

  return {
    id: faker.string.uuid(),
    avatar: faker.image.avatarGitHub(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
  };
}

/**
 *  Create a list of random users
 * @param {number} count the number of users to create
 * @returns {Array} a list of random users
 */
export const makeRandomUsers = (count = 3) =>
  faker.helpers.multiple(createRandomUser, { count });

/**
 *  A list of random users
 * @returns {Array} a list of random users
 */
export const fakeUsers = faker.helpers.multiple(createRandomUser, {
  count: 11,
});

function createRandomPost() {
  const title = faker.lorem.sentence();
  const slug = faker.helpers.slugify(title);
  const content = faker.lorem.paragraphs(3);

  return {
    id: faker.string.uuid(),
    title,
    slug,
    content,
    user: createRandomUser(),
    tags: ["history", "american", "crime"],
    reactions: faker.number.int(),
  };
}

/**
 *  Create a list of random posts
 * @param {number} count the number of posts to create
 * @returns {Array} a list of random posts
 */
export const makeRandomPosts = (count = 3) =>
  faker.helpers.multiple(createRandomPost, { count });

/**
 *  A list of random posts
 * @returns {Array} a list of random posts
 */
export const fakePosts = faker.helpers.multiple(createRandomPost, {
  count: 18,
});
