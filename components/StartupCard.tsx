import { formateDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { StartupCardType } from '@/types'

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const { _createdAt, views, author: { _id: authorId, name }, title, category, image, _id, description } = post

  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className="startup_card_date">{formateDate(_createdAt)}</p>
        <div className='flex gap-1.5'>
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1 ">
          <Link
            href={`/user/${authorId}`}
          >
            <p className='text-16-medium line-clamp-1'>{name}</p>
          </Link>

          <Link
            href={`/review/${_id}`}
          >
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link
          href={`/user/${authorId}`}
        >
          <Image 
            src="https://placehold.co/600x400"
            alt='placeholder image'
            width={48}
            height={48}
            className='rounded-full'
          />
        </Link>
      </div>

      <Link
        href={`/review/${_id}`}
      >
        <p className='startup_card_desc'>
          {description}
        </p>
        <img
          src={image}
          alt='placeholder'
          className='startup-card_img'
        />
      </Link>

      <div className="flex-between mt-5 gap-3">
        <Link
          href={`/?query=${category?.toLowerCase()}`}
        >
          <p className="text-16-medium">{category}</p>
        </Link>

        <Button className='startup-card_btn' asChild>
          <Link
            href={`/review/${_id}`}
          >
            Details
          </Link>
        </Button>
      </div>
    </li>
  )
}

export default StartupCard