import { GlobalConfig } from 'payload'

export const Portfolio: GlobalConfig = {
  slug: 'portfolio',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nav',
      type: 'group',
      fields: [
        {
          name: 'style',
          type: 'select',
          defaultValue: 'default',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Option 1',
              value: 'o1',
            },
          ],
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'buttons',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'header',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'profession',
          type: 'text',
          required: false,
        },
        {
          name: 'header_image',
          label: 'Header Image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'background_image',
          label: 'Background Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'about',
      type: 'group',
      fields: [
        {
          name: 'about',
          type: 'richText',
          required: true,
        },
        {
          name: 'profile_image',
          label: 'Profile Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'education',
      type: 'group',
      fields: [
        {
          name: 'education_items',
          label: 'Education Items',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'date',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'skills',
      type: 'group',
      fields: [
        {
          name: 'skills_items',
          label: 'Skills Items',
          type: 'array',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'type',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'projects',
      type: 'group',
      fields: [
        {
          name: 'projects_items',
          label: 'Projects Items',
          type: 'array',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'type',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      fields: [
        {
          name: 'copyright',
          type: 'text',
          required: true,
        },
        {
          name: 'social_links',
          label: 'Social Links',
          type: 'array',
          fields: [
            {
              name: 'platform',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
