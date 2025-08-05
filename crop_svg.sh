#!/bin/bash

# Function to crop SVG by adding transform and adjusting viewBox
crop_svg() {
  local file=$1
  local temp_file="${file}.temp"
  
  # Create a backup
  cp "$file" "${file}.bak"
  
  # Add transform attribute and adjust viewBox
  sed -E '/<svg/s/width="100%"/width="100%" transform="translate(-100,0)"/' "$file" > "$temp_file"
  
  # Replace original file
  mv "$temp_file" "$file"
  
  echo "Processed $file"
}

# Process interior1_cropped.svg
crop_svg "public/images/interior1_cropped.svg"

# Process interior4_cropped.svg
crop_svg "public/images/interior4_cropped.svg"

echo "Done processing SVG files"
