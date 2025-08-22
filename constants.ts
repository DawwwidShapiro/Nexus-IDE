
import { FileNode, FileType } from './types';

export const mockFileSystem: FileNode = {
  id: 'root',
  name: 'NexusIDE Projects',
  type: FileType.FOLDER,
  children: [
    {
      id: 'unreal-project',
      name: 'MyUnrealProject',
      type: FileType.FOLDER,
      children: [
        {
          id: 'unreal-project-uproject',
          name: 'MyUnrealProject.uproject',
          type: FileType.FILE,
          content: `{
  "FileVersion": 3,
  "EngineAssociation": "5.3",
  "Category": "",
  "Description": "",
  "Modules": [
    {
      "Name": "MyUnrealProject",
      "Type": "Runtime",
      "LoadingPhase": "Default"
    }
  ]
}`
        },
        {
          id: 'unreal-content',
          name: 'Content',
          type: FileType.FOLDER,
          children: [
            {
              id: 'unreal-bp',
              name: 'Blueprints',
              type: FileType.FOLDER,
              children: [
                {
                  id: 'bp-player',
                  name: 'BP_PlayerCharacter.uasset',
                  type: FileType.FILE,
                  content: '// This is a binary file representing a Blueprint asset.'
                }
              ]
            }
          ]
        },
        {
          id: 'unreal-source',
          name: 'Source',
          type: FileType.FOLDER,
          children: [
            {
              id: 'unreal-source-main',
              name: 'MyUnrealProject',
              type: FileType.FOLDER,
              children: [
                {
                  id: 'player-character-h',
                  name: 'MyPlayerCharacter.h',
                  type: FileType.FILE,
                  content: `
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "MyPlayerCharacter.generated.h"

UCLASS()
class MYUNREALPROJECT_API AMyPlayerCharacter : public ACharacter
{
  GENERATED_BODY()

public:
  AMyPlayerCharacter();

protected:
  virtual void BeginPlay() override;

public: 
  virtual void Tick(float DeltaTime) override;
  virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;
};`
                },
                {
                  id: 'player-character-cpp',
                  name: 'MyPlayerCharacter.cpp',
                  type: FileType.FILE,
                  content: `
#include "MyPlayerCharacter.h"

AMyPlayerCharacter::AMyPlayerCharacter()
{
  PrimaryActorTick.bCanEverTick = true;
}

void AMyPlayerCharacter::BeginPlay()
{
  Super::BeginPlay();
}

void AMyPlayerCharacter::Tick(float DeltaTime)
{
  Super::Tick(DeltaTime);
}

void AMyPlayerCharacter::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
  Super::SetupPlayerInputComponent(PlayerInputComponent);
}`
                }
              ]
            }
          ]
        },
      ],
    },
    {
      id: 'python-project',
      name: 'DataAnalysisBot',
      type: FileType.FOLDER,
      children: [
        {
          id: 'python-main',
          name: 'main.py',
          type: FileType.FILE,
          content: `
import pandas as pd
import matplotlib.pyplot as plt

def analyze_data(filepath):
    """
    Reads a CSV file, prints basic info, and shows a plot.
    """
    try:
        df = pd.read_csv(filepath)
        print("Data loaded successfully!")
        print("First 5 rows:")
        print(df.head())
        
        print("\\nBasic statistics:")
        print(df.describe())
        
        df.plot(kind='line', x='date', y='value', title='Data Over Time')
        plt.show()
    except FileNotFoundError:
        print(f"Error: File not found at {filepath}")

if __name__ == "__main__":
    analyze_data("data/sample_data.csv")
`
        },
        {
          id: 'python-data',
          name: 'data',
          type: FileType.FOLDER,
          children: [
            {
              id: 'python-csv',
              name: 'sample_data.csv',
              type: FileType.FILE,
              content: `date,value
2023-01-01,10
2023-01-02,12
2023-01-03,15
2023-01-04,11
2023-01-05,18
`
            }
          ]
        },
        {
          id: 'python-reqs',
          name: 'requirements.txt',
          type: FileType.FILE,
          content: `pandas
matplotlib`
        }
      ]
    },
    {
      id: 'readme-md',
      name: 'README.md',
      type: FileType.FILE,
      content: '# Nexus IDE Projects\n\nThis is the root directory for your projects in Nexus IDE.'
    },
  ],
};
