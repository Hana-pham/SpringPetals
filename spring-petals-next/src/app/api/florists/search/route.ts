import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  const location = searchParams.get('location') || 'Sydney, NSW, Australia';

  if (!query) {
    return NextResponse.json(
      { error: 'Search query is required' },
      { status: 400 }
    );
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here') {
    return NextResponse.json(
      {
        error: 'Google Maps API key not configured',
        message: 'Please add your API key to .env.local file'
      },
      { status: 500 }
    );
  }

  try {
    // Use Google Places API Text Search
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/place/textsearch/json',
      {
        params: {
          query: `${query} florist in ${location}`,
          key: apiKey,
        },
      }
    );

    const florists = response.data.results.map((place: any) => ({
      id: place.place_id,
      name: place.name,
      address: place.formatted_address,
      suburb: place.formatted_address.split(',')[1]?.trim() || place.vicinity,
      rating: place.rating || 0,
      totalRatings: place.user_ratings_total || 0,
      location: place.geometry.location,
      isOpen: place.opening_hours?.open_now,
      priceLevel: place.price_level,
      photo: place.photos?.[0]
        ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos[0].photo_reference}&key=${apiKey}`
        : null,
    }));

    return NextResponse.json({ florists });
  } catch (error: any) {
    console.error('Error searching florists:', error.response?.data || error.message);
    return NextResponse.json(
      {
        error: 'Failed to search florists',
        details: error.response?.data?.error_message || error.message
      },
      { status: 500 }
    );
  }
}
