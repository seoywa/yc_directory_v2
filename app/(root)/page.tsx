import SearchForm from '@/components/SearchForm'
import StartupCard from '@/components/StartupCard';
import React from 'react'

const HomePage = async ({ searchParams }: {
  searchParams: Promise< {query?: string}>
}) => {
  const query = (await searchParams).query;
  const posts = [
  {
    _createdAt: 'Yesterday',
    views: 55,
    author: { _id: 1, name: 'Elon' },
    _id: 1,
    description: 'A new purpose for humanity',
    image: 'https://elcom.com.vn/storage/uploads/images/uaoWeKRQrJgLDOmLb9B025g9qrtcrfddlE4HhWi5.jpg',
    category: 'Robots',
    title: 'We Robots'
  },
  {
    _createdAt: 'Today',
    views: 120,
    author: { _id: 2, name: 'Barack' },
    _id: 2,
    description: 'Exploring the mysteries of the ocean',
    image: 'https://example.com/ocean.jpg',
    category: 'Science',
    title: 'Deep Blue'
  },
  {
    _createdAt: 'Last Week',
    views: 340,
    author: { _id: 3, name: 'James' },
    _id: 3,
    description: 'The future of space travel is closer than we think',
    image: 'https://example.com/space.jpg',
    category: 'Technology',
    title: 'Beyond Earth'
  },
  {
    _createdAt: 'Two Days Ago',
    views: 76,
    author: { _id: 4, name: 'Davenport' },
    _id: 4,
    description: 'How AI is revolutionizing healthcare',
    image: 'https://example.com/healthcare.jpg',
    category: 'AI',
    title: 'Intelligent Care'
  },
  {
    _createdAt: 'A Month Ago',
    views: 215,
    author: { _id: 5, name: 'Talia' },
    _id: 5,
    description: 'The art and science of cooking',
    image: 'https://example.com/cooking.jpg',
    category: 'Food',
    title: 'Culinary Genius'
  }
];

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch your startup, <br />Connect with Entrepreneurs
        </h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query}/>
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for ${query}` : 'All Startups'}
        </p>

        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))) : (
              <p className='no-results'>No startups found</p>
          )}
        </ul>
      </section>
    </>
  )
}

export default HomePage